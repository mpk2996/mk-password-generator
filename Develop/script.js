// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector(".pwDisplay");

function generatePassword() {

  // 1. Prompt the user for the password criteria
  //    a. Password length 8 < 128
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Generate password based on criteria
  let pwLength = parseInt(prompt('How long do you want your password to be?'));
  console.log(pwLength);

  let userPw = [];
  let pwchar = [];

  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var specialChar = ['/', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+'];

  if (!pwLength) {
      alert('Please enter a number between 8 and 128');
  }
  else if (pwLength > 128 || pwLength < 8) {
      alert('Sorry password must be between 8 & 128 characters');
  } else {

      let uppersConfirm = confirm('Do you want your password to contain uppercase letters?');
      let lowersConfirm = confirm('Do you want your password to contain lowercase letters?');
      let numbersConfirm = confirm('Do you want your password to contain numbers?');
      let specialCharConfirm = confirm('Do you want your password to contain special characters?');

      if (uppersConfirm) {
          userPw = userPw.concat(upperCase);
      }
      console.log(userPw)
       if (lowersConfirm) {
          userPw = userPw.concat(lowerCase);
      }
       if (numbersConfirm) {
          userPw = userPw.concat(nums)
      }
       if (specialCharConfirm) {
          userPw = userPw.concat(specialChar)
      };
      console.log(userPw)
      var finalpassword = "";

      for (var i = 0; i < pwLength; i++) { 
           var randompW = userPw[Math.floor(Math.random() * userPw.length)]
         // pwchar.push(randompW)
        //  pwchar.join(",");
        finalpassword += randompW;
      }
      }
      console.log(finalpassword)

      return finalpassword;


};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
