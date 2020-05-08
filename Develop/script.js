// Assignment Code
// Selections
var generateBtn = document.querySelector("#generate");
var lowercase = confirm("Do you want your password to have lowercase letters?");
var uppercase = confirm("Do you want your password to have uppercase letters?");
var numeric = confirm("Do you want your password to include numbers?");
var specialch = confirm("Do you want your password to include special characters?");
var length = prompt("How many characters between 8-128 would you like your password to be?");

// Arrays
var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompt for length of password; make it the i variable
//do a loop so that it creats the number of characters the person wanted
//make several arrays of the alphabet, numbers, etc
// if <8 put in input, alert that there's not enough, same  with >128
// if all are false, alert that they have not made a selection

//make an alert of the result
