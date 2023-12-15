// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// making array of different types of characters
var Lalphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Ualphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "", "<", ">", "?", "`", "~"];

// presetting varables so later loops will work
var random = 0;
var password = false;


// Write password to the #password input
function writePassword() {
  
  // Prompting length of password
  var pLength = window.prompt("How long should the password be between 8 - 128?(enter a number)");
  // prompting what characters user would like in password
  var uCase = window.prompt("do you want uppercase letters(y/n)?");
  var lCase = window.prompt("do you want lowercase letters(y/n)?");
  var nums = window.prompt("do you want numbers (y/n)?");
  var spec = window.prompt("do you want special characters(y/n)?");
  // empty array to push characters into
  var availableChars = [];

  // checking if length meets basic password requirements
  if (pLength >= 8 && pLength <= 128) {
    console.log('ya didit')
  } else {
    // will alert user if they didnt meet requirements
    window.alert("Length error please use numbers and be between 8 - 128");
    return;
  }

  // pushing characters into array based on if user input y for yes
  if (uCase == "y") {
    Ualphabet.forEach(element => {
      availableChars.push(element);
    });
  }
  if (lCase == "y") {
    Lalphabet.forEach(element => {
      availableChars.push(element);
    });
  }
  if (nums == "y") {
    numbers.forEach(element => {
      availableChars.push(element);
    });
  }
  if (spec == "y") {
    sChars.forEach(element => {
      availableChars.push(element);
    });
  }
  console.log(availableChars)

// checks if user wanted any characters
  if (availableChars.length > 0) {
    // made false so multiple passwords can be generated
    password = false

    // loops based on user specified length 
    for (var i = 0; i < pLength; i++) {
      // generates a random number based on how many items are in the availableChars array
      random = Math.floor(Math.random() * availableChars.length);
      console.log(random);
      // chooses an item in the array based on the previous number
      var choice = availableChars[random];
      console.log(choice)
      // checks if password already has something because if it's undefined error will happen
      // if password has a value it will add the new string from the random choice
      if (password) {
      password = password + choice;
      // if password has false value it will be overwritten by the single character string from the random choice
      } else {
        password = choice
      }
      console.log(password);
    }
    // if user didnt say yes to any characters lets them know that cant work
  } else {
    window.alert('you need to have some kind of characters try again')
    return;
  }


  console.log(password);
  // makes the text on screen appear as the generated password
  passwordText.value = password;
}
passwordText.value = "Click to generate password"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
