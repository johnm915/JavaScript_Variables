console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "John";
let lastName = "Morgan";

var myAge = "45";
console.log (firstName);

// Exercise 2
let fullName = firstName + " " + lastName;
let templetfullName = `${firstName} ${lastName}`;

console.log("fullName", fullName);
console.log ("templatefullName",
 templetfullName);


// Exercise 3
let myStory;
let city = "Dodge City"
let myHobbyies = "Bike riding, hiking, flyfishing, spending time with friends and family ";

myStory = `Hello my name is ${fullName} 
I live in ${city}
my hobbies are ${myHobbyies}`;
 console.log(myStory)

myStory = "My name is" +  fullName + " ." + "I live in" + city + " ."
+ "I like" + myHobbyies + " .";
console.log(myStory)