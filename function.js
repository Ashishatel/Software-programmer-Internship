//function first(msg){      //parameter ->input
//    console.log(msg);
    
//}

//first("Welcom to Js");  // argument

//function of 2 number sum

/*function sum(x, y){

//local variable
    s = x+y;
   return s;

}

let val = sum(3,4);

console.log(val);*/


// fix parameter -> like local variable ->block scope of function



//Arrow fumction -> compact way of writing a function

//sum function

/*function sum(a, b){

    return a+b;
}

const arrowSum = (a, b) =>{
    console.log(a+b);
}*/

//multiplication function

/*function mul(a, b){
    return a*b;
}

const arrowmul = (a, b) =>{
    return a*b;
};

const printhello = () =>{
    console.log("Hello");
}
*/


// Create a function using the function keyword that takes a string as an argument & returns the number of vowels in the string.

/* function countVowels(str) {
    let count = 0;
    for (const char of str){

        if(char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
            count++;
        }
        
    }

    return count;
    console.log(count);
}

//Arrow Function

const countvow = (str) => {
    let count = 0;
    for (const char of str){

        if(char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
            count++;
        }
        
    }

    return count;
} */


// forEach Loop in Arrays -> higher order function or methods it takes
// functions as parameter or return function

// arr.forEach(callbackFunction)
// callbackFunction: Here, it is a function to execute for each element in the array

// A callback is a function passed as an argument to another function.

/* arr.forEach((val) => {
    console.log(val);
    }) */

    // let arr = [1, 2, 3, 4, 5, 6];

    /* arr.forEach(function printval(val){
        console.log(val);
    }); */


    // Using arrow function 

    /* arr.forEach((val, idx, arr) => {
        console.log(val, idx, arr);
    });*/




// For a given array of numbers, print the square of each value using forEach loop

/* let arr = [1, 2, 3, 4, 5, 6];

arr.forEach((val) => {
        console.log(val*val);
}); */

// Some more array Methods

// Map - > Creates a new array with the results of some operation. The value its callback returns are used to form new array

// arr.map(callbackfunc(val, idx, arr))

/* let newarr = arr.map((val) => {
     return val*2;
    }) */

/* let nums = [55, 35, 353, 32];

 let newarr = nums.map((num) => {
    return num;
});

console.log(newarr); */


// Filter methods -> Creates a new array of elements that give true for a condition/filter.

// all even elements

/* let arr = [ 1, 2, 4, 5, 6, 6,];

let evenarr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenarr); */

// Reduce -> performs some operations & reduces the array to a single value. It returns that single value.


/* let arr = [ 1, 2, 4, 5, 6, 6,];

const sum = arr.reduce((prev, curr) => {
  //return prev + curr;
  return prev > curr ? prev : curr;
});

console.log(sum); */

//practice

// we are given array of marks of students. filter out of the marks of students that scored 90+

/* let arr = [65, 78, 98, 94, 89, 97];

let newarr = arr.filter((val) => {
    return val > 90;
});

console.log(newarr);*/

// Take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("enter a number");

let arr = [];

for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.

let sum = arr.reduce( (prev,curr) =>{
    return prev + curr;
} );

console.log(sum);

// Use the reduce method to calculate product of all numbers in the array.

let prod = arr.reduce( (prev,curr) =>{
    return prev * curr;
} );

console.log(prod);






 








