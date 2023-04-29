// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//password criteria
var password = {
  minlength = 8,
  maxlength = 128,
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberic = 0123456789,
  specialChars = "!@#$%^&*()",
  password = "",
};

var newPassword = function() {
  //prompts user for password critera
  var userChoice = window.prompt("To generate a new password answer the following prompts");
//If user pressed Cancel, immeditaely end function
if(!userChoice) {
  return;
}

}
function passlength () {
  var userChoice = window.prompt("Enter desired password length bettwen 8 and 128 characters.");
  if (userChoice === randnumber)
}
newPassword();