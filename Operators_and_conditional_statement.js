// This is single line comment
/*this is multiple line 
comment*/

//Operators in JS used to perform some operation on data
//Arthimatic operators
//let a = 4;
//let b = 7;
//console.log("a+b=",a+b);
//console.log("a-b=",a-b);
//console.log("a*b=",a*b);
//console.log("a/b=",a/b);

//Modulus operator
//console.log("a%b=",a%b);

//Exponentiation operator

//console.log("a**b=",a**b);

//Unary operator (Increment operator)

//a++; 
//console.log(a);
//b--;
//console.log(b);

//Assignment operatores (=, +=,-=, *=, %=, **=)


//let a = 4;
//let b = 7;

//a+=5; //a=a+5
//console.log("a=",a); //9

//a-=3; //a=a-3
//console.log("a=",a); //1

//a*=5; //a=a*5
//console.log("a=",a); //20

//a/=2; //a=a/2
//console.log("a=",a); //2

//Comparison operators Equal(==), Equal to &type(===), not equal to(!=), not equal to &type(!==)

//let a = 4;  //number
//let b = 7;  //string

//console.log("a==b",a==b); //false

//console.log("a!=b",a!=b); //true

//console.log("a===b",a===b);
//console.log("a!==b",a!==b);

//console.log("a>=b",a>=b);
//console.log("a<=b",a<=b);

//Logical operators AND(&&), OR(||), NOT(!)

//let a = 6;
//let b = 5;

//let cond1 = a<b; //false
//let cond2 = a===6; //true

//console.log("cond1 && cond2",cond1 && cond2);

//console.log("cond1 || cond2",cond1 || cond2);

//onsole.log("!(a<b)",!(a<b));



//Conditional Statements 


//let age = 15;
//let mode = "dark";
//let color;

//if(age>18){
//    console.log("you can vote");

//} else console.log("you cannot vote");

//if(mode==="dark"){
//    color = "black";
//}

//if(mode==="light"){
  //  color = "white";
//}

//console.log(color);

let num = 10;
if(num%2===0){
    console.log("even");
}else {
    console.log("odd");
}

//else-if condition

let mode = "silver";
let color;

if(mode === "dark"){
    color = "black";
} else if(mode === "blue"){
    color = "blue";
}else{
    color = "white";
}

console.log(color);

//Ternary operatores

let age = 25;

let result = age >= 18 ? "Adult" : "Not Adult"; 
console.log(result);

// MDN Docs


//Practice Question
//Get user to input a number using promt. Check if the number is a multiple of 5 or not

//alert("Hello!");

//let name = prompt("hello!");
//console.log(name);

//let numb = prompt("enter a number:");
//if(numb%5 === 0){
// console.log("Numb is multiple of 5");

//}else {
  //  console.log("Not a multiple of 5");
//}

//write a code whichcan give grades to students according to their scores.

let score = prompt("enter your score(0-100):");
let grade;

if(score>=90 && score <=100){
    grade = "A";
}else if(score>=70 && score <=89){
    grade = "B";

} else if(score>=60 && score <=79){
    grade = "C";

} else {
    grade = "F";
}

console.log(grade);