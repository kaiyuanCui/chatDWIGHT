const responses = ["纯纯dog", "太对了", "经典", "c不动", "全靠你爹在c"];
const faDian = ["YOU WANT TO PLAY, LETS PLAY", "我～太～c～了～", "2121212121212121","我就是夜露king", "纯肥舞"]
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatLog = document.querySelector(".chatlog");

// Send user message on button click or Enter key press
sendBtn.addEventListener("click", function() {
  sendMessage();
});

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

// Send a message (user or bot)
function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage !== "") {
    const userChatMessage = createMessageElement("user-message", userMessage);
    chatLog.appendChild(userChatMessage);

    userInput.value = "";

    // Generate a bot message after a short delay
    setTimeout(function() {
      const botMessage = responses[Math.floor(Math.random() * responses.length)];
      const botChatMessage = createMessageElement("bot-message", botMessage);
      chatLog.appendChild(botChatMessage);
    }, Math.floor(Math.random() * 500) + 200);
  }
}

// Create a message element with the specified class and text content
function createMessageElement(className, textContent) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message");
  messageElement.classList.add(className);
  messageElement.innerHTML = "<p>" + textContent + "</p>";
  return messageElement;
}

// Generate a bot message every 10 seconds
setInterval(async function() {
  const botMessage = faDian[Math.floor(Math.random() * faDian.length)];
  for(var i=0; i<Math.random() *10; i++){
    
    const botChatMessage = createMessageElement("bot-message", botMessage);
    chatLog.appendChild(botChatMessage);
    await new Promise(r => setTimeout(r, 200));
  }
  
}, Math.floor(Math.random() * 10000) + 2000);

