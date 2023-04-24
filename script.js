const responses = ["纯纯dog", "太对了", "经典", "c不动", "全靠你爹在c"];
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatLog = document.querySelector(".chatlog");

sendBtn.addEventListener("click", function() {
  const userMessage = userInput.value;
  if (userMessage !== "") {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.classList.add("user-message");
    chatMessage.innerHTML = "<p>" + userMessage + "</p>";
    chatLog.appendChild(chatMessage);

    const botMessage = responses[Math.floor(Math.random() * responses.length)];
    const botChatMessage = document.createElement("div");
    botChatMessage.classList.add("chat-message");
    botChatMessage.classList.add("bot-message");
    botChatMessage.innerHTML = "<p>" + botMessage + "</p>";
    chatLog.appendChild(botChatMessage);

    userInput.value = "";
  }
});

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});
