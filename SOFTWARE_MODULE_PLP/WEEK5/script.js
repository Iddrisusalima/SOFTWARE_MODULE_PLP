
//  Variables & Conditionals

let age = 20; // variable
let ageResult = document.getElementById("ageResult");

if (age >= 18) {
  ageResult.textContent = "You are an adult!";
} else {
  ageResult.textContent = "You are a minor!";
}


// Part 2: Functions


// Function 1: Greeting
function showGreeting() {
  let name = prompt("Enter your name:");
  let message = greetUser(name);
  document.getElementById("greeting").textContent = message;
}

//  Helper function
function greetUser(username) {
  return "Hello, " + username + "! Welcome to JavaScript.";
}


// Loops

//  For loop
function listNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list first

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

//  While loop (console output)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

//  DOM Manipulation

let toggleBtn = document.getElementById("toggleBtn");
let toggleMessage = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", function () {
  if (toggleMessage.style.display === "none") {
    toggleMessage.style.display = "block";
  } else {
    toggleMessage.style.display = "none";
  }
});
