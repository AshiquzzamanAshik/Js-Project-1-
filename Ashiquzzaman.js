"use strict"
//(Problem-No-1) Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
console.log(carName);


//(Problem-No-2)On one single line, declare three variables with the following names and values:
const person = {
    fastname: "Ashiquzzaman",
    lastname: "Ashik",
    ago: "23"
};
console.log(person);
console.log(person.fastname);
console.log(person.lastname);
console.log(person.ago);
console.log(person.fastname, person.lastname, person.ago);


//(Problem-No-3)Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
    x *= y;
console.log(x)


//(Problem-No-4)Use comments to describe the correct data type of the following variables:
let length = 16;
console.log(length);
console.log("data type: " + typeof length);

let lastName = "Johnson";
console.log(lastName);
console.log("data type: " + typeof lastName);

const x1 = {
  firstName: "John",  
  lastName: "Doe"
};
console.log(x1);
console.log("data type: " + typeof x1);


//(Problem-No-5)Execute the function named myFunction.
function myFunction(message) {
  console.log(message);
};
let result = myFunction('Hello World!');
console.log("result");


//(Problem-No-6)3. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person1 = {
    name: "John",
    age: 50
  };

console.log(person1.name + " is " + person1.age);


//(Problem-No-7)The <button> element should do something when someone clicks on it. Try to fix it!
// Problem-No-7 Ans : index.html file a aca


//(Problem-No-8)Array Related Question 
//1. Alert the number of items in an array, using the correct Array property: 
const cars = ["Volvo", "Jeep", "Mercedes"];
let x01 = cars[0];
let y01 = cars[1];
let z01 = cars[2];
console.log(x01);
console.log(y01);
console.log(z01);

//2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);


//(Problem-No-9) Math Related Problems
//1. Use the correct Math method to create a random number.
const randomNumber = Math.random();
console.log("Random Number:", randomNumber);

//2. Use the correct Math method to return the largest number of 10 and 20.
const largestNumber = Math.max(10, 20);
console.log("Largest Number:", largestNumber);

//3. Use the correct Math method to get the square root of 9.
const squareRoot = Math.sqrt(9);
console.log("Square Root of 9:", squareRoot);

//(Problem-No-10)comparison operator related problems! 
/*let x0 = 10;
let y0 = 5;
alert(x0 > y0); // Alerts true

let age = 17; 
alert(age < 18 ? "Too young" : "Old enough");
*/