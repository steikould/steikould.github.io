# Interactive Portfolio with AI Chatbot

This project is an interactive personal portfolio website featuring an AI-powered chatbot and dynamic project display pages. It's designed to showcase professional experience, projects, and skills in an engaging way.

## Features

*   **Interactive Chatbot**:
    *   A conversational interface allowing users to ask about Maxime Coursey's experience, projects, skills, education, and contact information.
    *   Powered by a Python (Flask) backend that processes natural language queries and serves responses.
    *   Frontend chat interface built with vanilla JavaScript.
*   **Dynamic Project Showcase**:
    *   A dedicated `projects.html` page displaying summaries of various projects in a card-based layout.
    *   Clicking on a project card leads to a `project_detail.html` page with comprehensive information about that specific project.
    *   Project content (summaries, detailed descriptions, tech stacks, complexity notes, value created, images, links) is dynamically loaded from individual JSON files located in the `projects_data/` directory.
*   **Data-Driven Content**: Most of the portfolio's content, including chatbot responses and project details, is sourced from JSON files, making it easier to update and manage.
*   **Dark Mode**: User-toggleable dark mode for comfortable viewing.
*   **Responsive Design**: Built with Bootstrap to ensure compatibility across various screen sizes.

## Current Architecture

*   **Frontend**: Static HTML, CSS, and JavaScript.
    *   `index.html`: Main landing page with the chatbot interface.
    *   `projects.html`: Lists all projects.
    *   `project_detail.html`: Shows details for a specific project.
    *   Can be hosted on GitHub Pages (or any static site hosting).
*   **Backend (`portfolio_backend/`)**: Python Flask application.
    *   Serves the chatbot API (`/api/chat`).
    *   Handles intent recognition and response generation based on data from JSON files.
    *   Requires separate hosting if deployed publicly (not covered by GitHub Pages for Python execution). Refer to `portfolio_backend/README.md` for its setup instructions.
*   **Data Files**:
    *   `portfolio_backend/portfolio_data.json`: Contains general information for the chatbot (about me, experience, skills, education, contact).
    *   `projects_data/`: Directory containing individual JSON files for each project and a `project_manifest.json` to list them.

## Getting Started

### Frontend

1.  Clone the repository.
2.  Open `index.html` in your web browser to view the main page and interact with the chatbot.
3.  Navigate to `projects.html` to see the project showcase.
    (Note: For full chatbot functionality, the backend server must be running.)

### Backend (for Chatbot Functionality)

Detailed setup instructions for the Python backend are in `portfolio_backend/README.md`. In summary:
1.  Navigate to the `portfolio_backend` directory.
2.  Create a Python virtual environment and activate it.
3.  Install dependencies: `pip install -r requirements.txt`.
4.  Run the server: `python app.py`.
5.  The chatbot on the frontend will then be able to communicate with this local backend server (ensure the `fetch` URL in `assets/js/chat.js` points to the correct backend address, typically `http://127.0.0.1:5000/api/chat` for local development).

## Next Steps

*   **Advanced Chatbot Integration**:
    *   Integrate a more sophisticated Large Language Model (LLM) for richer, more context-aware chatbot conversations.
    *   Implement a RAG (Retrieval Augmented Generation) engine, potentially using GCP services (Vertex AI Search, Vector Search), to provide the LLM with context from the portfolio data (both `portfolio_main_data.json` from the backend and the detailed project JSONs from `projects_data/`).
*   **Backend Deployment**:
    *   Deploy the Python Flask backend to a cloud hosting service (e.g., GCP App Engine, Cloud Run, AWS Elastic Beanstalk, Heroku, PythonAnywhere) to make the full chatbot functionality publicly available.
*   **UI/UX Refinements**:
    *   Further enhance the visual design and user experience of the chat interface and project pages.
    *   Improve loading states and user feedback during API calls or data fetching on the frontend.

## TODOS / Potential Improvements

*   **Content Updates**:
    *   Replace placeholder project images in `projects_data/` with actual project visuals.
    *   Add more real projects to `projects_data/`.
    *   Regularly update `portfolio_backend/portfolio_main_data.json` with current experience and skills.
*   **Chatbot Enhancements**:
    *   Implement more robust NLP for intent recognition in the Python backend (e.g., using libraries like spaCy) if full LLM integration is phased.
    *   Add support for basic conversation history or context carry-over in the chatbot.
    *   Client-side rendering of Markdown in chat messages if the backend starts sending more complex formatted text.
*   **Development & Maintenance**:
    *   Add comprehensive unit and integration tests for both frontend JavaScript and Python backend.
    *   Secure the backend API with authentication/API keys if deployed publicly.
    *   Improve accessibility (WCAG compliance, ARIA attributes, keyboard navigation) across all pages.
    *   Set up CI/CD pipelines for automated testing and deployment of both frontend and backend components.
*   **Configuration**:
    *   Make the backend API URL configurable in the frontend JavaScript (e.g., via a config file or environment variable during a build step if applicable) instead of hardcoding `http://127.0.0.1:5000`.

## Contributing

This is a personal portfolio project. Suggestions and ideas are welcome via GitHub Issues.

---

*This README was last updated on YYYY-MM-DD.*
