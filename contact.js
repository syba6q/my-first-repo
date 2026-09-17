document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const resultArea = document.getElementById("form-result");
  resultArea.textContent = "送信中...";

  fetch("https://b3l5zrom6c.execute-api.us-east-1.amazonaws.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => response.json())
  .then(data => {
    resultArea.textContent = "送信できました!";
    document.getElementById("contact-form").reset();
  })
  .catch(error => {
    resultArea.textContent = "送信に失敗しました。もう一度お試しください。";
    console.error(error);
  });
});
