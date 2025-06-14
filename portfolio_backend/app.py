import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import os # For path joining

app = Flask(__name__)
CORS(app)

# Determine the absolute path to portfolio_data.json
# This assumes portfolio_data.json is in the same directory as app.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_FILE_PATH = os.path.join(BASE_DIR, 'portfolio_data.json')

# Load portfolio data from JSON
try:
    with open(JSON_FILE_PATH, 'r') as f:
        portfolio_data = json.load(f)
except FileNotFoundError:
    app.logger.error(f"{JSON_FILE_PATH} not found! Backend will not have data.")
    portfolio_data = {} # Fallback to empty data
except json.JSONDecodeError:
    app.logger.error(f"Error decoding {JSON_FILE_PATH}! Check its format.")
    portfolio_data = {}


# --- Intent Functions ---
def get_about_info(data):
    return data.get('aboutMe', "Sorry, I don't have information about Maxime's background at the moment.")

def get_experience_info(data):
    experiences = data.get('experience', [])
    if not experiences:
        return "No work experience information found in my records."
    response = "Based on the records, here's Maxime's work experience:\n"
    for exp in experiences:
        response += f"\n- Role: {exp.get('title', 'N/A')}"
        # Company and duration are part of the title string in the current JSON,
        # but if they were separate fields:
        # response += f"\n  Company: {exp.get('company', 'N/A')}"
        # response += f"\n  Duration: {exp.get('duration', 'N/A')}"
        response += f"\n  Description: {exp.get('description', 'N/A').strip()}\n"
    return response

def get_projects_info(data, project_type='latestProjects'):
    project_list = data.get(project_type, [])
    if not project_list:
        type_name_user = "latest projects" if project_type == 'latestProjects' else "notable work/articles"
        return f"No information found about Maxime's {type_name_user}."

    type_name_response = "latest projects" if project_type == 'latestProjects' else "notable work and articles"
    response = f"Regarding Maxime's {type_name_response}:\n"
    for proj in project_list:
        response += f"\n- {proj.get('title', 'N/A')}"
        if proj.get('description'):
            response += f"\n  Summary: {proj.get('description').strip()}"
        if proj.get('link') and proj['link'] != '#' and proj['link'] is not None:
            response += f"\n  More details: {proj['link']}"
        response += "\n"
    return response

def get_skills_info(data):
    skills_data = data.get('skills', {})
    if not skills_data or (not skills_data.get('intro') and not skills_data.get('list')):
        return "No skills information available at the moment."

    response = skills_data.get('intro', "Maxime's skills include:").strip() + "\n"
    if skills_data.get('list'):
        for skill in skills_data['list']:
            response += f"\n- {skill.get('name', 'N/A')} (Level: {skill.get('level', 'N/A')}, Proficiency: {skill.get('percentage')}%)"

    response += "\n\n(If you'd like a visual, ask the chatbot to 'visualize skills' or 'chart skills' on the frontend!)"
    return response

def get_education_info(data):
    education_items = data.get('education', [])
    if not education_items:
        return "No education details found in my records."
    response = "Maxime's educational background includes:\n"
    for edu in education_items:
        response += f"\n- {edu.get('degree', 'N/A')} from {edu.get('university', 'N/A')}"
    return response

def get_contact_info(data):
    contact = data.get('contact', {})
    if not contact or all(value == "" for value in contact.values()): # Check if all contact fields are empty
        return "Contact information is not available."
    response = "You can reach Maxime or find more online:\n"
    if contact.get('location'):
        response += f"\n- Location: {contact['location']}"
    if contact.get('email'):
        response += f"\n- Email: {contact['email']}"
    if contact.get('website'):
        response += f"\n- Website: <a href='{contact['website']}' target='_blank'>{contact['website']}</a>"
    return response

# --- Chat Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({"error": "Missing 'message' in request body"}), 400

        user_message = data['message'].lower().strip()
        original_message = data['message'] # For echoing if needed
        bot_reply = ""
        action_response = {} # For potential client-side actions

        if not portfolio_data: # Check if data failed to load
            return jsonify({"reply": "I'm having trouble accessing my data at the moment. Please try again later."})

        if 'hello' in user_message or 'hi' in user_message or user_message == "hey":
            bot_reply = "Hello! This is the Python-powered backend. How can I help you learn about Maxime today?"
        elif 'about yourself' in user_message or 'about you' in user_message or 'tell me about maxime' in user_message:
            bot_reply = get_about_info(portfolio_data)
        elif 'experience' in user_message or 'work history' in user_message or 'employment' in user_message:
            bot_reply = get_experience_info(portfolio_data)
        elif 'latest projects' in user_message or ('project' in user_message and 'latest' in user_message):
            bot_reply = get_projects_info(portfolio_data, 'latestProjects')
        elif 'notable work' in user_message or 'articles' in user_message:
            bot_reply = get_projects_info(portfolio_data, 'notableWork')
        elif 'project' in user_message:
            # More general project query, could combine or prioritize
            latest_proj_info = get_projects_info(portfolio_data, 'latestProjects')
            notable_proj_info = get_projects_info(portfolio_data, 'notableWork')
            bot_reply = f"Maxime has a range of projects. Here's a look at the latest ones:\n{latest_proj_info}\n\nAnd for notable work/articles:\n{notable_proj_info}"
        elif 'skill' in user_message and not ('chart' in user_message or 'visualize' in user_message):
            bot_reply = get_skills_info(portfolio_data)
        elif 'education' in user_message or 'qualifications' in user_message:
            bot_reply = get_education_info(portfolio_data)
        elif 'contact' in user_message or 'email' in user_message or 'reach maxime' in user_message :
            bot_reply = get_contact_info(portfolio_data)
        elif 'resume' in user_message or 'cv' in user_message:
            bot_reply = "Maxime's resume is available as `MaxCourseyJuly2024.pdf`. The frontend should provide a direct link for this."
        elif 'github' in user_message or 'contributions' in user_message or 'activity' in user_message:
            bot_reply = "You can typically view Maxime's GitHub activity on the main page. I'll let the frontend know you're interested."
            action_response['action'] = 'scroll_to_github' # Tell frontend to scroll
        elif 'chart skills' in user_message or 'visualize skills' in user_message or 'show skills chart' in user_message:
            bot_reply = "Okay, preparing to show you a chart of Maxime's skills!"
            action_response['action'] = 'render_skills_chart' # Tell frontend to render chart
        else:
            bot_reply = f"I've processed your message: '{original_message}'. I'm still being developed to handle a wider range of topics about Maxime."

        response_payload = {"reply": bot_reply}
        if action_response:
            response_payload.update(action_response)

        return jsonify(response_payload)

    except Exception as e:
        app.logger.error(f"Error in /api/chat: {str(e)}")
        import traceback
        app.logger.error(traceback.format_exc())
        return jsonify({"error": "An internal server error occurred processing your message."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
