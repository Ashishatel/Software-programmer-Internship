// Objects
// A javaScript object is an entity havingstate and behavior.
// (properties and method)

// JS object have a special property called prototype.

/* const student = {
    fullName: "Ashish Patel",
    marks: 95,
    printmarks: function () {
        console.log("marks = ", this.marks);
    },
}; */


// We can set prototype using  __proto__

/* const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const ashish = {
    salary: 50000,
};

const ashish2 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%")   // if object &prototype have same method, object method will be used.
    }
};

const ashish3 = {
    salary: 50000,
};

ashish.__proto__ = employee;

ashish2.__proto__ = employee;
ashish3.__proto__ = employee; 

*/


// Classes in JS
// Class is a program-code template for creating objects.
// Those objects will have some state(variables) & some behviour(function) inside it.

/* class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner", 10);  //constructor
console.log(fortuner);
//fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 20);    //constructor
console.log(lexus);
//lexus.setBrand("lexus");

*/



//  Inheritance in JS
// Inheritance is passing down properties & methods from parent class to child class.
// class Parent {}
// class child extends Parent {}


// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}
// let obj = new Child();


/* class Person {

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve Problems");
    }
}

let ashish = new Engineer();

*/

// Super Keyword

// the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// super(args)  -> call parent constructor
// super.parentMethod(args)

/* class Person {
    
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super();   // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        console.log("Solve Problems");
    }
}

let engobj = new Engineer("computer science");

*/


// Error handling - >  try-catch

/* try{
    normal code
} catch(err) {   // err is error object
    handling error
}

*/

let a = 4;
let b = 6;
console.log("a=", a);
console.log("b=", b);
console.log("a+b=", a+b);
try {
   console.log("a+b=", a+c);
} catch (err) {
    console.log(err);
}

console.log("a+b=", a+b);
console.log("a+b=", a+b);

