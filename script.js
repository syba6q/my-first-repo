function showMessage() {
  const messageArea = document.getElementById("message-area");
  messageArea.textContent = "ボタンが押されました!" + new Date().toLocaleTimeString();
}
