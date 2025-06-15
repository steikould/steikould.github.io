# Portfolio Backend

This directory contains the Python Flask backend for the interactive portfolio chatbot.

## Setup and Running Locally

1.  **Ensure Python is installed.** (Python 3.7+ recommended)
2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the Flask development server:**
    ```bash
    python app.py
    ```
    The server will typically start on `http://127.0.0.1:5000`.

## API Endpoints

*   **POST /api/chat**
    *   Accepts: JSON object with a "message" key (e.g., `{"message": "Hello"}`)
    *   Returns: JSON object with a "reply" key (e.g., `{"reply": "Backend response"}`)
