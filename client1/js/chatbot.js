// JavaScript for Chatbot
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Send message function
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Append user's message
    appendMessage(userText, 'user');

    // Clear input
    userInput.value = '';

    try {
        const response = await fetch('/process-input', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: userMessage })
        });

        const data = await response.json();
        appendMessage(data.response || "Sorry, no response found.", 'bot');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    } 
    catch (error) {
        console.error("Error:", error);
        appendMessage("An error occurred. Please try again later.", 'bot');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Simulate bot response
    // setTimeout(() => {
    //     const botReply = getBotReply(userText);
    //     appendMessage(botReply, 'bot');
    // }, 1000);
}

// Append message to chat area
function appendMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Simulated bot response logic
function getBotReply(userText) {
    return `You said: "${userText}". How can I assist you further?`;
}

// Event Listener
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
