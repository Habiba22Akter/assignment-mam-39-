// Ask for user's name
let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

// Show greeting in the page
document.getElementById("greeting").innerText = "Hello, " + userName + "!";

// Function to change background color
function changeBackgroundColor() {
  const colors = ["#ff9999", "#ccffcc", "#99ccff", "#ffff99", "#d9b3ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

