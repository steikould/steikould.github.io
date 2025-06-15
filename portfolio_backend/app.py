import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import traceback # For detailed error logging

app = Flask(__name__)
CORS(app)

# --- Data Loading ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__)) # Directory of app.py (portfolio_backend)
PORTFOLIO_DATA_PATH = os.path.join(BASE_DIR, 'portfolio_data.json')
# PROJECTS_DATA_DIR is one level up from BASE_DIR, then into 'projects_data'
PROJECTS_DATA_DIR = os.path.join(os.path.dirname(BASE_DIR), 'projects_data')

portfolio_main_data = {}
try:
    with open(PORTFOLIO_DATA_PATH, 'r', encoding='utf-8') as f: # Added encoding
        portfolio_main_data = json.load(f)
    app.logger.info(f"Successfully loaded {PORTFOLIO_DATA_PATH}")
except FileNotFoundError:
    app.logger.error(f"{PORTFOLIO_DATA_PATH} not found! Backend will lack main portfolio data.")
except json.JSONDecodeError:
    app.logger.error(f"Error decoding {PORTFOLIO_DATA_PATH}! Check its format.")
except Exception as e:
    app.logger.error(f"An unexpected error occurred loading {PORTFOLIO_DATA_PATH}: {str(e)}")


detailed_projects_list = []
try:
    manifest_path = os.path.join(PROJECTS_DATA_DIR, 'project_manifest.json')
    if not os.path.exists(manifest_path):
        app.logger.warning(f"Project manifest not found at {manifest_path}. Detailed project info will be unavailable.")
    else:
        with open(manifest_path, 'r', encoding='utf-8') as f_manifest: # Added encoding
            project_files = json.load(f_manifest)

        for project_filename in project_files:
            project_path = os.path.join(PROJECTS_DATA_DIR, project_filename)
            try:
                with open(project_path, 'r', encoding='utf-8') as f_project: # Added encoding
                    detailed_projects_list.append(json.load(f_project))
            except FileNotFoundError:
                app.logger.error(f"Project file {project_filename} listed in manifest but not found at {project_path}.")
            except json.JSONDecodeError:
                app.logger.error(f"Error decoding project file {project_filename}. Check its format.")
        app.logger.info(f"Successfully loaded {len(detailed_projects_list)} detailed projects.")
except Exception as e:
    app.logger.error(f"Error loading detailed projects: {str(e)}")
    app.logger.error(traceback.format_exc())


# --- Intent Functions (using portfolio_main_data for non-project items) ---
def get_about_info(data):
    return data.get('aboutMe', "Sorry, I don't have information about Maxime's background at the moment.")

def get_experience_info(data):
    experiences = data.get('experience', [])
    if not experiences: return "No work experience information found in my records."
    response = "Based on the records, here's Maxime's work experience:\n"
    for exp in experiences:
        response += f"\n- {exp.get('title', 'N/A')}" # Title in JSON already includes company
        response += f"\n  Description: {exp.get('description', 'N/A').strip()}\n"
    return response

def get_skills_info(data):
    skills_data = data.get('skills', {})
    if not skills_data or (not skills_data.get('intro') and not skills_data.get('list')):
        return "No skills information available at the moment."
    response = skills_data.get('intro', "Maxime's skills include:").strip() + "\n"
    if skills_data.get('list'):
        for skill in skills_data['list']:
            response += f"\n- {skill.get('name', 'N/A')} (Level: {skill.get('level', 'N/A')}, Proficiency: {skill.get('percentage')}%)"
    response += "\n\n(You can ask the chatbot to 'visualize skills' or 'chart skills' on the frontend for a chart view!)"
    return response

def get_education_info(data):
    education_items = data.get('education', [])
    if not education_items: return "No education details found in my records."
    response = "Maxime's educational background includes:\n"
    for edu in education_items:
        response += f"\n- {edu.get('degree', 'N/A')} from {edu.get('university', 'N/A')}"
    return response

def get_contact_info(data):
    contact = data.get('contact', {})
    if not contact or all(not value for value in contact.values()):
        return "Contact information is not available."
    response = "You can reach Maxime or find more online:\n"
    if contact.get('location'): response += f"\n- Location: {contact['location']}"
    if contact.get('email'): response += f"\n- Email: {contact['email']}"
    if contact.get('website'): response += f"\n- Website: <a href='{contact['website']}' target='_blank' rel='noopener noreferrer'>{contact['website']}</a>"
    return response

# --- New/Updated functions for project info using detailed_projects_list ---
def get_all_detailed_projects_summary(projects_list):
    if not projects_list:
        return "No detailed project information available at the moment."

    response = "Here's a summary of Maxime's projects. You can ask for more details about a specific one, or visit the 'My Projects' page:\n"
    for proj in projects_list:
        project_page_link = f"project_detail.html?id={proj.get('id', '')}"
        response += f"\n- <b>{proj.get('title', 'N/A')}</b>: {proj.get('summaryDescription', 'No summary.')} "
        response += f"(<a href='{project_page_link}' target='_blank' rel='noopener noreferrer'>View Full Details</a>)\n"
    return response

def get_specific_project_details(projects_list, project_query):
    if not projects_list:
        return "No detailed project information available to search."

    # Search by ID first, then by title containment
    found_project = next((p for p in projects_list if project_query.lower() == p.get('id','').lower()), None)
    if not found_project:
        found_project = next((p for p in projects_list if project_query.lower() in p.get('title','').lower()), None)

    if not found_project:
        return f"Sorry, I couldn't find a project specifically matching '{project_query}'. You can ask to see 'all projects'."

    response = f"Here are the details for <b>{found_project.get('title', 'N/A')}</b>:\n"
    response += f"\n<b>Summary:</b> {found_project.get('summaryDescription', 'N/A')}"
    response += f"\n<b>Extended Description:</b> {found_project.get('extendedDescription', 'N/A')}"
    if found_project.get('techStack'):
        response += f"\n<b>Tech Stack:</b> {', '.join(found_project['techStack'])}"
    if found_project.get('technicalComplexityNotes'):
        response += f"\n<b>Technical Notes:</b> {found_project['technicalComplexityNotes']}"
    if found_project.get('valueCreated'):
        response += f"\n<b>Value Created:</b> {found_project['valueCreated']}"

    links_html = ""
    if found_project.get('liveDemoLink'):
        links_html += f" <a href='{found_project['liveDemoLink']}' target='_blank' rel='noopener noreferrer'>Live Demo</a>"
    if found_project.get('sourceCodeLink'):
        links_html += f" <a href='{found_project['sourceCodeLink']}' target='_blank' rel='noopener noreferrer'>Source Code</a>"
    if links_html:
        response += f"\n<b>Links:</b> {links_html.strip()}"

    project_page_link = f"project_detail.html?id={found_project.get('id', '')}"
    response += f"\n\nFor a more detailed view, visit: <a href='{project_page_link}' target='_blank' rel='noopener noreferrer'>Project Detail Page</a>"
    return response

# --- Chat Endpoint (Updated) ---
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message_original = data.get('message', '') # Keep original case for some echo
        user_message_lower = user_message_original.lower().strip()

        bot_reply = ""
        action = None

        if not user_message_lower:
            return jsonify({"error": "Missing 'message' in request body"}), 400

        if not portfolio_main_data and not detailed_projects_list: # Check if all data failed to load
            return jsonify({"reply": "I'm having trouble accessing my data at the moment. Please try again later."})

        if 'hello' in user_message_lower or 'hi' in user_message_lower or user_message_lower == "hey":
            bot_reply = "Hello! This is the Python-powered portfolio assistant. How can I help you learn about Maxime today?"
        elif 'about yourself' in user_message_lower or 'about you' in user_message_lower or 'tell me about maxime' in user_message_lower:
            bot_reply = get_about_info(portfolio_main_data)
        elif 'experience' in user_message_lower or 'work history' in user_message_lower or 'employment' in user_message_lower:
            bot_reply = get_experience_info(portfolio_main_data)

        elif 'project' in user_message_lower or 'projects' in user_message_lower:
            # Attempt to extract a specific project name/id if the query is like "tell me about project alpha"
            # This is a simple keyword extraction, not true NLP.
            potential_query = user_message_lower.replace('projects','').replace('project','').replace('tell me about','').replace('details for','').strip()
            if potential_query and len(potential_query) > 2 : # Avoid triggering on just "project"
                 # Check if query matches any project ID or part of a title
                is_specific_query = any(potential_query == p.get('id','').lower() for p in detailed_projects_list) or \
                                    any(potential_query in p.get('title','').lower() for p in detailed_projects_list)
                if is_specific_query:
                    bot_reply = get_specific_project_details(detailed_projects_list, potential_query)
                else: # General project query or specific query that didn't match well
                    bot_reply = get_all_detailed_projects_summary(detailed_projects_list)
            else: # General query for projects
                bot_reply = get_all_detailed_projects_summary(detailed_projects_list)

        elif 'skill' in user_message_lower and not ('chart' in user_message_lower or 'visualize' in user_message_lower): # Avoid clash with chart skill
            bot_reply = get_skills_info(portfolio_main_data)
        elif 'chart skills' in user_message_lower or 'visualize skills' in user_message_lower or 'show skills chart' in user_message_lower:
            bot_reply = "Okay, I'll ask the page to generate a chart of Maxime's skills for you!"
            action = "render_skills_chart"

        elif 'education' in user_message_lower or 'qualifications' in user_message_lower:
            bot_reply = get_education_info(portfolio_main_data)
        elif 'contact' in user_message_lower or 'email' in user_message_lower or 'reach maxime' in user_message_lower :
            bot_reply = get_contact_info(portfolio_main_data)
        elif 'resume' in user_message_lower or 'cv' in user_message_lower:
            bot_reply = "Maxime's resume is available as `MaxCourseyJuly2024.pdf`. The frontend should provide a direct link for this, or you can ask me to 'link resume'."
            if 'link resume' in user_message_lower: # More explicit command for direct link
                 bot_reply = "Here is the resume: <a href='MaxCourseyJuly2024.pdf' target='_blank' rel='noopener noreferrer'>MaxCourseyJuly2024.pdf</a>"

        elif 'github' in user_message_lower or 'contributions' in user_message_lower or 'activity' in user_message_lower:
            bot_reply = "You can view Maxime's GitHub activity on the main page. I'll ask the page to scroll you there!"
            action = "scroll_to_github"

        else:
            bot_reply = f"I've processed your message: '{user_message_original}'. I'm still learning to respond to this specific query about Maxime."

        response_payload = {"reply": bot_reply}
        if action:
            response_payload["action"] = action

        return jsonify(response_payload)

    except Exception as e:
        app.logger.error(f"Error in /api/chat: {str(e)}")
        app.logger.error(traceback.format_exc())
        return jsonify({"error": "An internal server error occurred processing your message."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
