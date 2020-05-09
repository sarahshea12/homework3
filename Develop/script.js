// Assignment Code
// User input
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
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var sp = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-"]
var selectCh = [0, 1, 2, 3]

// Selections from arrays
for (i=0; i < length; i++) {
  // Selecting randomly which array to choose from
  var selector3 = selectCh[Math.floor(Math.random() * 4)];
  console.log(selector3);
  // Select from lowercase array
  var selector2 = Math.floor(Math.random() * 26);
  if (selector3 === selectCh[1] && (lowercase)) {
    var selectlc = lc[selector2];
    console.log(selectlc);
  }
  // Select from uppercase array
  var selector2 = Math.floor(Math.random() * 26);
  if (selector3 === selectCh[2] && (uppercase)) {
    var selectuc = uc[selector2];
    console.log(selectuc);
  }
  // Select from number array
  var selector1 = Math.floor(Math.random() * 10);
  if (selector3 === selectCh[3] && (numeric)) {
    var selectnum = num[selector1];
    console.log(selectnum);
  }
  // Select from special character array
  var selector1 = Math.floor(Math.random() * 10);
  if (selector3 === selectCh[0] && (specialch)) {
    var selectsp = sp[selector1];
    console.log(selectsp);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// if <8 put in input, alert that there's not enough, same  with >128
// if all are false, alert that they have not made a selection

//make an alert of the result

// at end, write "return.(name of function overall)"
// blank array, insent choose letter, clear array