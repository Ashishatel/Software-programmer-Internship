// Event handling in JS

// node.event = () => {//handle here}




 //let btn1  = document.querySelector("#btn1");

/*btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
} */

//let div = document.querySelector("div");

/*div.onmouseover = () => {
    console.log("you are inside div");
} */


// Event Object
// It is a special object that has details the event.
// All event handlers have access to the event object properties and methods

// node.event = (e) => {// handle here}

/* btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
      console.log(evt.target);
      console.log(evt.clientX, evt.clientY);
    
} */


// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)

// Note: the callback reference should be same to remove

/* btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - handler3");
}

btn1.addEventListener("click",handler3 );

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});


btn1.removeEventListener("click", handler3);

*/



let modebtn = document.querySelector("#mode");

let currmode  = "light";
modebtn.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})