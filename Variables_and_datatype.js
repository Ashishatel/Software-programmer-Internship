//-Variable names are case sensitive;"a" and "A" is different.
//- only letters, digits, underscore(_) and $ is allowed. (not even space)
//- Only a letter, underscore(_) or $ should be 1st Character. 
//- Reserved words cannot be variabes names.///
//console.log("Hello!");
//console.log("Hello Ashish!");
//name = "Ashish patel";
//console.log(name);
//Age = 25;
//console.log(Age);
/*price = 99.23;
//console.log(price);
x = null;
console.log(x);
y = undefined;
console.log(y);
isCorrect = true;
console.log(isCorrect);
price = 24;
console.log(price);*/

/* let, const and var
var : Variable can be re-declared and updated. A global variable.

let : Variable cannot be re-declared but can be updated. A block scope variable.

const : Variable cannot be re-declared or updated. A block scope variable.*/

/*let a; // let can be declared without initialisation.
let name = "Ashish Patel";
let age = 25;
age = 29;
let totalPrice = 100;
console.log(name);
console.log(age);
//const c; // const cannot be declared without initialisation.
const price = 25;
const PI = 3.14;
console.log(PI);*/

// Block scope variable

/*
{
    let x = 20;
    console.log(x);
}
{
    let x = 10;
    console.log(x);
}

*/

//Data Types in JavaScript

//Number, String, Boolean, Undefined, Null, BigInt, Symbol (Primitive DataType)

//Number

let age = 25;
let price = 100;

//String

let fullname = "Ashish Patel";

//Boolean

isFollow = true;

//Undefined

let x;

// Null

let y =null;

//BigInt

let a = BigInt("123");

//Symbol

let b = Symbol("Hello!");

//Object

const student = {
    fullname: "Ashish Patel",
    age: 25,
    Cgpa: 8.33,
    isPass: true,
};
// const object -> key can be updated

student["age"] = student["age"]+1;
console.log(student["age"]);
console.log(student.age);

student["name"] = "Ashish Verma";
console.log(student.name);

// Create a const object called "product" to store information.

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 70,
};

console.log(product);

// Create a const object called "profile" to store information.

const profile = {
    username: "Ashish Patel",
    isFollow: false,
    followers: 2233,
    following: 12,
};

console.log(typeof profile["username"]);
