//Loops in JavaScript
//Loops are used to execute a piece of code again and again

//for loop

//for(let i=1;i<=10;i++){
//    console.log("Ashish Patel");// 5 times execute
//}


//calculate sum of 1 to n 

/*let sum = 0;
for(let i=1;i<=10;i++){
   sum = sum+i;
}*/

//console.log("sum=",sum);



// While Loop

/*let i = 1;
while(i<=10){
    console.log(i);
    i++;
} */

// do-while loop

/*let i = 20;
do {
    console.log(i);
    i++;
}while(i<=10);*/



// for-of loop

/*let str = "String";
let len = 0;

for(let i of str){  //iterator -> character
    console.log(i);
    len++;
}

console.log("string length:",len);*/


//for-in loop

/*let student = {
    name: "Ashish",
    age: 25,
    cgpa: 8.33,
    isPass: true


};

for(let i in student){
    console.log("Key:", i, "value=",student[i]);
}*/

//Print even number between 1 to 100

/*for(let i = 0; i<=100; i++){
    if(i%2===0){  //even
        console.log(i);
    }
}*/


//Create a game where you start with any random game number. Ask the user to keep guessing the game number until enters correct value.

let gamenum = 25;

let usernum = prompt("Guess the game number: ");
while(usernum != gamenum){
  usernum = prompt("you entered wrong number. Guess again");

}

console.log("congratulations you won");



