// global variables
var lowerString = "abcdefghijklmnopqrstuvwxyz"; // string containing all letters
var lowerCaseArray = lowerString.split(''); // splits string into array
var upperString = lowerString.toUpperCase(); // converts lower case to upper case
var upperCaseArray = upperString.split('');
var numString = "1234567890";
var numArray = numString.split('');
var specialCharString = "`~!@#$%^&*()<>{}[]|-_=+,.?/:;";
var specialCharArray = specialCharString.split('');
var userSelections = [];  // blank array to be filled with user choices
var passLength = 0;


function generatePassword() {
  userSelections = []; // this ensures that whenever this function is called, the userSelections array will begin from an empty state
  passLength = parseInt(prompt("How many characters do you want your password to be? \n(Must be between 8 and 128 characters)"));

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please choose an integer between 8 and 128.");
    return getPrompts();  // prevents user from typing strings instead of numbers, or any numbers below 8 or above 128
  }

  if (confirm("Do you want to include lower case letters?")) {
    userSelections = userSelections.concat(lowerCaseArray);
  }

  if (confirm("Do you want to include upper case letters?")) {
    userSelections = userSelections.concat(upperCaseArray);
  }

  if (confirm("Do you want to include numbers?")) {
    userSelections = userSelections.concat(numArray);
  }

  if (confirm("Do you want to include special characters?")) {
    userSelections = userSelections.concat(specialCharArray);
  }
  console.log(userSelections)

  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randomIndex = userSelections[Math.floor(Math.random() * userSelections.length)];
    password += randomIndex
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

