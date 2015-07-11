//problem one, *need to get indexof 7 to work too
var phonenumber = prompt("Enter your phone number (ex. XXX-XXX-XXXX)");
var dash = "-";
var correct = phonenumber.indexOf('-');
if (correct === 3) {
  alert("Your phone number is valid!");
}
else {
  alert("Your phone number is invalid!");
}
//problem two, *need second index to work
var birthday = prompt("What's your birthday? (ex. xx/xx/xx)");
var correct = birthday.indexOf('/');
if (correct === 2) {
  alert("Your birthday is valid!");
}
else {
  alert("Your birthday is invalid!");
}
//problem three, *need to varify all numbers
var postal = prompt("What's your postal code? (ex. xxxxx or xxxxx-xxxx)");
var correct = postal.indexOf('-');
var length = postal.length
if (length === 5) {
  alert("Your postal code is valid!");
}
else if (length === 10, correct === 5) {
  alert("Your postal code is valid!");
}

else {
  alert("Your postal code is invalid!");
}

//problem four
var state = prompt("What's your state abbreviation? (ex. NH)");
var length = state.length
if (length === 2) {
  alert("Your abbreviation is valid!");
}
else {
  alert("Your postal code is invalid!");
}
//problem five
var status = prompt("Are you married?");
var length = status.length
if (status.toLowerCase() === "yes".toLowerCase()) {
  alert("Your life is over...");
}
else if (status.toLowerCase() === "no".toLowerCase()) {
  alert("Good for you!");
}
else {
  alert("Oops! Didn't catch that. Please try again.");
}

/*Create a blank, valid HTML5 document.
Create a JavaScript file
Prompt the user to enter their phone number with dashes (XXX-XXX-XXX)
Alert the user if their phone number is valid (True or False) according to the simple rule that the fourth and eighth characters must be dashes.
Following the same procedure, prompt and validate the following fields:
birth date (xx/xx/xx)
postal code (xxxxx OR xxxxx-xxxx)
state abbreviation (XX)
married ("yes" or "no" or "YES" or "NO" or "Yes" or "No")
*/
