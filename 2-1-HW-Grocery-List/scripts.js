//Task 1
//Write a program that takes in user input for the names of three grocery items and the number of each item the user would like. Then generate a shopping list output to the console with the number and name of each item in a list format.
const userName = prompt("Welcome beautiful people! What's your name?");

//1. Prompt the user to enter the first grocery item.
//2. Accept the user's answer and store it in a variable.
var item1 = prompt("What would you like first?");

//3. Prompt the user to enter how many of the first grocery items to add.
//4. Accept the user's answer and store it in a variable.
var numberItem1 = prompt("How many of " + item1 + " would you like?");

//5. Repeat steps 1-4 for the second and third grocery items.
var item2 = prompt("What would you like next?");
var numberItem2 = prompt("How many of " + item2 + " would you like?");

var item3 = prompt("What would you like last?");
var numberItem3 = prompt("How many of " + item3 + " would you like?");

//6. Output to the console the shopping list of items with each item on its own each line.
console.log(numberItem1, " ", item1);
console.log(numberItem2, " ", item2);
console.log(numberItem3, " ", item3);

//7. Output to the console the total number of grocery items (Hint: create a `sum` variable to store total number of items)
var sum = numberItem1 + numberItem2 + numberItem3;
console.log("Total number of grocery items: " + sum);
document.getElementById('total').innerHTML = userName + ', your total number of items ordered is ' + sum + '.';

//Task 2 - Practice using common string methods
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
let pangram = "The quick brown fox jumps over the lazy dog.";
let anotherPangram = "The five boxing wizards jump quickly.";

//2. Transform the string stored in `tongueTwister` to all lowercase. Store the result in a variable and print it to the console.
tongueTwister.toLowercase();
console.log(tougueTwister);

//3. Get the index of the first occurrence of "fox" in `panagram` and transform the first letter to uppercase. Print the result to the console.
const index = panagram.indexOf('fox');
const firstLetter = panagram[index].toUppercase();
console.log(firstLetter);

//4. Return the 11th character in `anotherPangram`. Print the result to the console. (Hint: the problem asks for the 11th character, not the 11th index).
const updated = anotherPanagram[10];
console.log(character);