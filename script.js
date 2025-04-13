// script.js

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user's message
    displayMessage(userMessage, "user-message");

    // Send user message to the API
    try {
        const response = await fetch(`https://kaiz-apis.gleeze.com/api/gpt-4o?ask=${encodeURIComponent(userMessage)}&uid=1`);
        const data = await response.json();

        // Display AI response
        displayMessage(data.response, "bot-message");
    } catch (error) {
        console.error("Error:", error);
        displayMessage("Something went wrong. Please try again later.", "bot-message");
    }

    // Clear input
    userInput.value = "";
}

function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
