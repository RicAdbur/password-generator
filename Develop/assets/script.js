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
var passLength = 8; // 8 is minimum value

function generatePassword() {
  passLength = parseInt(prompt("How many characters do you want your password to be? \n(Must be between 8 and 128 characters)"))

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please choose an integer between 8 and 128.");
    return false;
  }

  if (confirm("Do you want to include lower case letters?"))
    userSelections = userSelections.concat(lowerCaseArray);

  if (confirm("Do you want to include upper case letters?"))
    userSelections = userSelections.concat(upperCaseArray);

  if (confirm("Do you want to include numbers?"))
    userSelections = userSelections.concat(numArray);

  if (confirm("Do you want to include special characters?"))
    userSelections = userSelections.concat(specialCharArray);
}


// How long do you want password to be? (prompt)
  // Store result in variable
    // Do you want lower case? (Confirm)
      // If yes
        // merge lower case array into userSelections array
      // If no
        // Do nothing
    // Do you want upper case? (Confirm)
      // If yes
        // merge upper case array into userSelections array
      // If no
        // Do nothing
    // Do you want numbers? (Confirm)
      // If yes
        // merge numbers array into userSelections array
      // If no
        // Do nothing
    // Do you want special characters? (confirm)
      // If yes
        // merge special characters array into userSelections array
      // If no
        // Do nothing


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

