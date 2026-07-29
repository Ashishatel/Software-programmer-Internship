// Array in JavaScript -> collection of items
/*let marks = [97,82,75,72,79];
console.log(marks);
console.log(marks.length);  //property

let str = ["ram","sita","bharat"];

console.log(str);*/

//Array indices 

//Looping over an array

/*let marks = [97,82,75,72,79];

for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}*/


// for-of
/*let marks = [97,82,75,72,79];
for(let i of marks){
    console.log(i);
}

let cities = ["Allahabad","varanasi","delhi","noida"];
for(let i of cities){
    console.log(i.toUpperCase());
}*/

//Practice
//for a given array with marks of students. Find the average marks of the entire class

/*let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
}

console.log("average marks :",sum/arr.length);*/


//

let items = [250, 645, 300, 900, 50];

/*let i =0;
for(let val of items){
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log("value after offer =", items[i]);
    i++;
}*/

/*for(let i = 0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}

console.log(items);*/

//Array Methods push() -> add to end, pop()- > delete from end and return, toString() -> convert array to string


//let fooditem = ["potato", "apple", "tomato","litchi"];

//fooditem.push("chips","burger", "panner");
//console.log(fooditem);
//let deletitem = fooditem.pop();
//console.log(fooditem.toString());
//console.log(fooditem);
//console.log(deletitem);


//Concat(): joins multiple arrays & returns results

let hero = ["thor","spiderman", "ironman","antman","doctor"];
let c_hero = ["anuj","manish"];

let str = hero.concat(c_hero);
//console.log(str);

//unshift() -> add to start , shift() -> delete from start & return

//hero.unshift("justin");
//console.log(hero);

//let val = hero.shift();
//console.log(val);

// Slice(startidx, endidx) -> returns a piece of the array
//Splice(startidx, delcount,newEl1):-> change original array(add, remove,replace)

//console.log(hero);
//console.log(hero.slice(1,3));
//console.log(hero.slice(1));

let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.splice(2, 2, 101, 102);
//Add element
//arr.splice(2, 0, 101);
//console.log(arr);

//delete element

//arr.splice(3,1);
//console.log(arr);

//Replace element

arr.splice(3, 1, 101);
console.log(arr);















