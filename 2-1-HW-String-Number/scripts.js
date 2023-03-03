//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
const dogQuestion = "But what if I like dogs more than cats?";
console.log(dogQuestion.length);

//1 Result Answer

//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
const noms = "chips pizza no fruit";
console.log(noms.length);
//2 Result Answer

//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
var code = "I have no interest in Boba";
code = code.replace("no","some");
console.log(code);
//3 Result Answer:

//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
var thisString = "Tell me whyyy!";
var thatString = thisString.trim();
console.log(thatString);
//4 Result Answer

//5
// Convert 1400 into a string.
//5 Code Answer:
var number1 = 1400;
var string1 = number1.toString();
//5 Result Answer:

//6
//Convert the boolean true and false into integers
//6 Code Answer:
var booleanTrue = true;
var booleanFalse = false;
var TrueInteger = Number(booleanTrue);
var FalseInteger = Number(booleanFalse);
console.log(TrueInteger);
console.log(FalseInteger);
//6 Result Answer:

//7
// Convert the string "02130" into an integer
//7 Code Answer:
let string = "02130";
let integer = parseInt(string);
console.log(integer);
//7 Result Answer:

//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let string = 'Fighting Evil by Moonlight';
let Moonlight = "Moonlight";
let index = string.indexOf(Moonlight);

if (index !== -1) {
    console.log('found');
} else {
    console.log('not found');
}
//8 Result Answer:

//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let favFood = "chicken";
let favDrink = "coke";
let outputString = "I live " + favFood + " " + favDrink;
//9 Result Answer:

//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:
var dogQuestion = "But what if I like dogs more than cats?"
console.log(dogQuestion.length);
//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:
let numbers = [85, -3, 5, 93.2, -42.4];
let smallest = Math.min(...numbers);
console.log(smallest);
//11 Result Answer:


//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
console.log(Math.floor(Math.random() * 10) + 1);
//12 Result Answer:


//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
console.log(Math.floor(Math.random() * (21 - 14 + 1) + 14));

//13 Result Answer:



//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:

//14 Result Answer: