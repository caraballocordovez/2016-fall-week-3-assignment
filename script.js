/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

//Your code here

var shoe1 = {
	name:"Venture 5",
	price:79.95,
	maker: "ASICS",
}

var shoe2 = {
	name:"Breathable",
	price:32.99,
	maker: "JACKSHIBO",
}

var shoe3 = {
	name:"Gusto Cross",
	price:39.97,
	maker: "Champion",
}

var shoe4 = {
	name:"Suede",
	price:168.32,
	maker: "Puma",
}

productList.push(shoe1, shoe2, shoe3, shoe4);

console.log(productList[0]);


/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    if (productList[i].price<50) {

    console.log("We have a deal for you")};
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

var total = 0
for(var i = 0; i < productList.length; i++) {

total += (productList[i].price);

}

//3.2 then, divide total price by the number of products, using proudctList.length

console.log(total/productList.length)

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    for (var i=0; i<productList.length; i++) {
    		if (productList[i].price < price) {
    			numOfMatchingProducts ++
    		}
    }

    //Your code here

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
