// Assignment code here
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lettersLow.split('');
var lettersUp = lettersLow.toUpperCase();
var upperCaseArray = lettersUp.split('');
var numbers = "1234567890";
var numArray = numbers.split('');
var specialChars = "`~!@#$%^&*()-_=+<>,.?/:;)";
var specialCharArray = specialChars.split('');
var userSelections = [];  // blank array to be filled with user choices
var passLength = 8;


 function generatePassword () {

// How long do you want password to be? (prompt)
// Store result in variable
  passLength = window.prompt("How many characters do you want your password to be?")
  // Do you want lower case? (Confirm)
    // If yes
      // combine arrays
    // If no
      // Do nothing
  // Do you want upper case? (Confirm)
    // If yes
      // merge upperCase array into userSelections array
    // If no
      // Do nothing
  // Do you want numbers? (Confirm)
    // If yes
      // merge numbers array into userSelections array
    // If no
      // Do nothing
  // Do you want special characters? (confirm)
    // If yes
      // merge specialChars array into userSelections array
    // If no
      // Do nothing
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

