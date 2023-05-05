//code for 'generate'' button in the browser
var generateBtn = document.querySelector("#generate");

//arrays for password criteria 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//Declaration variables
var plength;
var yesLowercase;
var yesUppercase;
var yesNumeric;
var yesSpecialchars;
var newLength;
var choices = [];
var password = "";

function getPasswordOptions() {
  //prompt user for password criteria
  plength = (prompt("Choose a password length between 8 and 128 chracters."));
  //password length 8 < 128
  while (plength < 8 || plength > 128) {
    alert("Password must be bewtween 8 and 128 characters.\nPlease try Again.")
    plength = (prompt("Choose a password length between 8 and 128 chracters."));
  }
  alert("Your password will be " + plength + " characters long.");
  //User chooses lowercase, uppercase, numbers, or special characters
  yesLowercase = confirm("Click OK to include lowercase letters in your password");
  yesUppercase = confirm("Click OK to include uppercase letters in your password");
  yesNumeric = confirm("Click OK to include numbers in your password.");
  yesSpecialchars = confirm("Click OK to include special characters in your password");

  //Validate the input has at least 1 criteria
  while (!yesLowercase && !yesUppercase && !yesNumeric && !yesSpecialchars) {
    alert("Password must contain at least one character type.")
    yesLowercase = (confirm("Click OK to include lowercase letters in your password"));
    yesUppercase = (confirm("Click OK to include uppercase letters in your password"));
    yesNumeric = (confirm("Click OK to include numbers in your password."));
    yesSpecialchars = (confirm("Click OK to include special characters in your password"));
  }
}
function getRandom() {
  //clears the old user choice(s) if application was already run once
  choices = [];

  if (yesLowercase) {
    choices = choices.concat(lowercase);
  }
  if (yesUppercase) {
    choices = choices.concat(uppercase);
  }
  if (yesNumeric) {
    choices = choices.concat(numeric);
  }
  if (yesSpecialchars) {
    choices = choices.concat(specialChars);
  }
}

function generatePassword() {
  getPasswordOptions();
  getRandom();
  var ranPassword = "";
  for (var i = 0; i < plength; i++) {
    //this is the random index
    var index = Math.floor(Math.random() * choices.length);
    //combines together index and characters
    ranPassword += choices[index];
  }
  console.log(ranPassword);
  return ranPassword;
  
}

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //displays password on screen
  passwordText.value = password;
}
// Add event listener to generate button
//calls function
generateBtn.addEventListener("click", writePassword);
