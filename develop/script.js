// Assignment Code
//belongs to red button
var generateBtn = document.querySelector("#generate");

//arrays for password criteria 
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberic = 0123456789;
  var specialChars = "!@#$%^&*()";

  //Declaration variables
  var length
  var yesLowercase
  var yesUppercase
  var yesNumeric
  var yesSpecialchars

function generatePassword() {
  console.log("To generate a new password decide on the following criteria\nClick OK to include character and Cancel to exclude those characters from your password. ")
  //1. prompt user for password criteria
  var length = (prompt("Choose a password length between 8 and 128 chracters."));
  //  a. password length 8 < 128
    while (length <= 8 || length >= 128) {
      alert("Password must be bewtween 8 and 128 characters.\nPlease try Again.")
      var length = (prompt("Choose a password length between 8 and 128 characters."))
    }
  //  b. lowercase, uppercase, numbers, special characters
  var yesLowercase = (confirm("Click OK to include lowercase letters in your password"));
  var yesUppercase = (confirm("Click OK to include uppercase letters in your password"));
  var yesNumeric = (confirm("Click OK to include numbers in your password."));
  var yesSpecialchars = (confirm("Click OK to include special characters in your password"));

  var allChoices = [yesLowercase, yesUppercase, yesNumeric, yesSpecialchars]; 
  //2. Validate the input by 2 criteria
    while (allChoices === false) {
      alert("Password must contain at least one character type must be included.")
      var yesLowercase = (confirm("Click OK to include lowercase letters in your password"));
      var yesUppercase = (confirm("Click OK to include uppercase letters in your password"));
      var yesNumeric = (confirm("Click OK to include numbers in your password."));
      var yesSpecialchars = (confirm("Click OK to include special characters in your password"));
    } if {
        var yesLowercase === true(lowercase)
    }
  //3. Generate password


  //4. Diplay password to the box on the page
  return "generated password will go here"
}

// Write password to the #password input
//create generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//displays password on screen
  passwordText.value = password;
}

// Add event listener to generate button
//calls function
generateBtn.addEventListener("click", writePassword);


