const responses = ["纯纯dog", "太对了", "经典", "c不动", "全靠你爹在c"];
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatLog = document.querySelector(".chatlog");

sendBtn.addEventListener("click", function() {
  const userMessage = userInput.value;
  if (userMessage !== "") {
    const userChatMessage = document.createElement("div");
    userChatMessage.classList.add("chat-message");
    userChatMessage.classList.add("user-message");
    userChatMessage.innerHTML = "<p>" + userMessage + "</p>";
    chatLog.appendChild(userChatMessage);

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
