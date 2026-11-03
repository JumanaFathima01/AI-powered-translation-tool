from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)

app = Flask(__name__)


# Homepage route
@app.route("/")
def home():
    return render_template("index.html")


LANGUAGES = {
    "en": "English",
    "hi": "Hindi",
    "kn": "Kannada",
    "ml": "Malayalam",
    "ar": "Arabic",
    "fr": "French",
    "es": "Spanish",
}


# Translation route
@app.route("/translate", methods=["POST"])
def translate():

    # Receive JSON data from JavaScript
    data = request.get_json()

    # Extract input text and language selections
    text = data.get("text", "").strip()
    source_language = data.get("source_language")
    target_language = data.get("target_language")

    # Validate input text
    if not text:
        return jsonify({"error": "Please enter some text."}), 400

    # Validate language selections
    if source_language not in LANGUAGES:
        return jsonify({"error": "Invalid source language."}), 400

    if target_language not in LANGUAGES:
        return jsonify({"error": "Invalid target language."}), 400

    # Convert language codes into language names
    source_name = (
        "the detected language"
        if source_language == "auto"
        else LANGUAGES[source_language]
    )

    target_name = LANGUAGES[target_language]

    # Create the translation prompt
    prompt = f"""
    Translate the following text from {source_name} to {target_name}.

    Text:
    {text}

    Return only the translated text.
    Preserve the original meaning and tone.
    Do not add explanations or notes.
    """

    # Send the prompt to Gemini
    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt,
    )

    # Extract the generated translation
    translated_text = response.text

    # Return the translation to JavaScript
    return jsonify({"translated_text": translated_text})


if __name__ == "__main__":
    app.run(debug=True)
