// Prompt the user to enter a score between 1 and 100
let score = parseInt(prompt("Enter a score between 1 and 100:"));

// Check if the score is valid (between 1 and 100)
if (score < 1 || score > 100) {
  alert("Invalid score. Please enter a number between 1 and 100.");
} else {
  // Use else if statements to assign a grade based on the score
  if (score >= 90 && score <= 100) {
    alert("You received an A");
  } else if (score >= 80 && score <= 89) {
    alert("You received a B");
  } else if (score >= 70 && score <= 79) {
    alert("You received a C");
  } else if (score >= 60 && score <= 69) {
    alert("You received a D");
  } else {
    alert("You received an F");
  }
}