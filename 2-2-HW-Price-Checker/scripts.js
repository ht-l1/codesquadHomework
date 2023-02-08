//You will create a script that determines how an online store should price items on its website. 
//The store employee inputs the name of the item and its "base price".  Then the employee answers questions that will impact the final price of the item.


//Use prompt() to ask a few questions:
var item = prompt("Enter the name of the item: ")
var basePrice = prompt("What is the base price of the item?")
var holiday = prompt("Is today 'Black Friday'? Answer yes or no.")
var searchEngine = prompt("Did the purchase find the product through a search engine? Answer yes or no.")
var site = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.")

//Now your script should create a message containing several sentences, based on the store employee's answers above. Your script should also increase or decrease the item price based on those answers. 

let price = basePrice;
let message = "";

if (holiday === "yes") {
    basePrice *= 0.75;
    message += "Since it's Black Friday, we will reduce the price by 25%. "
} else {
    message += "It's not Black Friday, so the price didn't change for that."
}

if (searchEngine === "yes") {
    basePrice *= 1.01;
    message += "We will increase the price by 1% to pay the search engine."
} else {
    message += "The customer didn't use a search engine, so the price didn't change for that."
}

if (site === "yes") {
    basePrice = 0.9;
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%."
} else {
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that."
}

// alert("The base price for the ${item} is ${basePrice}. Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is ${finalPrice}.")
alert('The base price for the + ${item} is $${price}.')
alert(message);
