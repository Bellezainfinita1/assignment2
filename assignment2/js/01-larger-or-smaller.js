// Prompt the user to enter the first integer
let num1 = parseInt(prompt("Enter the first integer:"));

// Prompt the user to enter the second integer
let num2 = parseInt(prompt("Enter the second integer:"));

// Use simple conditional statements to determine the larger number
if (num1 > num2) {
  document.write(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  document.write(num2 + " is larger than " + num1);
} else {
  document.write("Both numbers are equal");
}