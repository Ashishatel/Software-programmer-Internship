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

function countVowels(str) {
    let count = 0;
    for (const char of str){

        if(char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
            count++;
        }
        
    }

    return count;
    //console.log(count);
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
}
