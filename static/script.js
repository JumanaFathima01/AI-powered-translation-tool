
// Get HTML elements

const sourceLanguage = document.getElementById("source-language");
const targetLanguage = document.getElementById("target-language");

const inputText = document.getElementById("input-text");
const translatedText = document.getElementById("translated-text");

const swapButton = document.getElementById("swap-button");
const copyButton = document.getElementById("copy-button");
const translateButton = document.getElementById("translate-button");

const message = document.getElementById("message");


// Feature 1: Swap languages

swapButton.addEventListener("click", function () {

    const sourceValue = sourceLanguage.value;
    const targetValue = targetLanguage.value;

    if (sourceValue === "auto") {
        message.textContent = "Please select a source language before swapping.";
        return;
    }

    sourceLanguage.value = targetValue;
    targetLanguage.value = sourceValue;

    message.textContent = "Languages swapped successfully!";

});


// Feature 2: Copy translated text

copyButton.addEventListener("click", async function () {

    const text = translatedText.value;

    if (text.trim() === "") {
        message.textContent = "There is no translated text to copy.";
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        message.textContent = "Translation copied successfully!";
    } catch (error) {
        message.textContent = "Unable to copy the translation.";
    }

});


// Feature 3: Clear text areas

inputText.addEventListener("input", function () {

    translatedText.value = "";
    message.textContent = "";

});

translateButton.addEventListener("click", async function () {

    const text = inputText.value;

    // Loading state
    translateButton.disabled = true;
    translateButton.textContent = "Translating...";

    try {

        const response = await fetch("/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                source_language: sourceLanguage.value,
                target_language: targetLanguage.value
            })
        });

        const result = await response.json();

        if (!response.ok) {
            message.textContent = result.error;
            return;
        }

        translatedText.value = result.translated_text;
        message.textContent = "";

    } catch (error) {

        message.textContent = "Unable to connect to the server.";

    } finally {

        translateButton.disabled = false;
        translateButton.textContent = "Translate";

    }

});
