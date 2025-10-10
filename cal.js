let ac=document.getElementById("ac");


// Get the display area (we’ll show results here)
const display = document.createElement("div");
display.classList.add("display");
document.querySelector(".base").prepend(display);

let currentInput = ""; // what user types

// Select all buttons inside .buttons
const buttons = document.querySelectorAll(".buttons div");

// Loop through each button and add a click event
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "AC") {
      // clear all
      currentInput = "";
      display.innerText = "0";
    } 
    else if (value === "DEL") {
      // delete last character
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    } 
    else if (value === "=") {
      // try to calculate result
      try {
        // Use eval carefully — calculates the string like math
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString(); // allow continued calculations
      } catch (error) {
        display.innerText = "Error";
      }
    } 
    else {
      // add number/operator to current input
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
