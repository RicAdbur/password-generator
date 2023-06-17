// Assignment code here
var lettersLow = "abcdefghijklmnopqrstuvwxyz"
var lowerCase = lettersLow.split('')
var lettersUp = lettersLow.toUpperCase();
var upperCase = lettersUp.split('')
var numbers = "1234567890"
var numSplit = numbers.split('')
var specialChars = "`~!@#$%^&*()-_=+<>,.?/:;)"
var specialSplit = specialChars.split('')
var userSelections = []

// How long do you want password to be? (prompt)
    // Store result in variable
  // Do you want lower case? (Confirm)
    // If yes
      // combine arrays
    //If no
      // Do nothing
  // Do you want upper case? (Confirm)
    // If yes
      // merge upperCase array into userSelections array
    // If no
      // Do nothing
  // Do you want numbers? (Confirm)
    // If yes
      // merge numbers array into userSelections array
    //If no
      // Do nothing
  // Do you want special characters? (confirm)
    // If yes
      // merge specialChars array into userSelections array
    //If no
      // Do nothing


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
