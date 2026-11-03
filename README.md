# AI-Powered Language Translation Tool 

A web-based language translator built using Python, Flask, and Google's Gemini API. This application allows users to translate text between multiple languages using AI-powered translation.

## Features

- Translate text between multiple languages
- Automatic source language detection
- Select source and target languages
- Swap selected languages
- Copy translated text to clipboard
- Loading state during translation
- Error handling for invalid input and API requests
- Simple and responsive user interface

##  Technologies Used

- **Python** – Backend programming
- **Flask** – Web framework
- **Google Gemini API** – AI-powered translation
- **HTML** – Webpage structure
- **CSS** – Styling and responsive design
- **JavaScript** – Frontend interactions
- **uv** – Python package and environment management

##  Getting Started

### Prerequisites

- Python
- uv
- Google Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JumanaFathima01/AI-powered-translation-tool.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AI-powered-translation-tool
   ```

3. Install dependencies:

   ```bash
   uv sync
   ```

4. Create a `.env` file in the project root and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

5. Start the application:

   ```bash
   uv run python app.py
   ```

6. Open your browser and visit:

   http://127.0.0.1:5000/

## 🔑 API Configuration

This project uses the Google Gemini API for translation.

Get an API key from [Google AI Studio](https://aistudio.google.com/apikey).

Keep your API key private. Never upload your `.env` file to GitHub.

## 📂 Project Structure

```text
language-translator/
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
├── app.py
├── .env
├── .gitignore
├── pyproject.toml
├── uv.lock
└── README.md
```

## 👩‍💻 Author

**Fathimath Jumana**

