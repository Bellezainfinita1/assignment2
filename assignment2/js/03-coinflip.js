// Generate a random number between 0 and 1 using Math.random()
let coinFlip = Math.round(Math.random());

// Prompt the user to select "Heads" or "Tails"
let choice = prompt("Select 'Heads' or 'Tails':");

// Use a conditional statement to check the result of the coin flip
if (coinFlip === 0) { // Heads
  if (choice.toLowerCase() === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (choice.toLowerCase() === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  }
} else if (coinFlip === 1) { // Tails
  if (choice.toLowerCase() === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else if (choice.toLowerCase() === "tails") {
    alert("The flip was tails and you chose tails...you win!");
  }
}