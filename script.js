// DOM Manipulation
// Selecting with id 

// document.getElementById("idname")

/*let heads = document.getElementById("head");
console.log(heads); */

// document.getElementsByClassName("ClassNamw")

/*let heading = document.getElementsByClassName("head");
 console.log(heading);
*/


 // document.getElementsByTagName


 /*let para = document.getElementsByTagName("p");
 console.log(para);
*/

 // query selector -> document.querySelector("id or class or tag name")

/* let element = document.querySelector("p");  //first element
 console.dir(element);

 let elem = document.querySelectorAll("p");  // all elements
 console.dir(elem);
*/

 
// tagName : returns tag for element nodes
// innerText: returns the text content of the elements and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements



//Create a h2 heading element with text-"hello javascript".
// Append "from javasscript tutorial" to this text using js


/* let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Javascript tutorial"; */


//Create 3 divs with common class name - "box".
// Access them & add some unique text to each of them

/* let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++
}
    */

//divs[0].innerText = "new unique value 1";
//divs[1].innerText = "new unique value 2";
//divs[2].innerText = "new unique value 3";


// Attributes  -> getAttribute(attr)  ---- to get the attribute value
// setAttribute(attr, value) --- to set the attribute value

let div = document.querySelector("div");

console.log(div);

let id = div.getAttribute("id");
console.log(id);