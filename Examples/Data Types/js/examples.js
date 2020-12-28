document.writeln("Open the Inspect/Console pane in Chrome to see the output...");

/*
1. Functions
2. Invoke functions (function, function expression)
3. Pass function to a function
4. array
5. object
6. array of objects
7. function that takes array of objects and a function
8. function that takes array of objects and an array of functions
*/

/**************************************************************************************/

var names = new Array();
names.push("alan");
names.push("bea");
names.push("ciara"); //a, b, c
console.log(names);
names.pop();
console.log(names);
console.log("\npush and pop...\n");

names.unshift("ANNA");
console.log(names); //push to front
names.shift(); //pop from front

/**************************************************************************************/

function print(x){
    console.log(x);
}

//+ve, -ve, 0
function sortByLength(a, b){
    return a.length - b.length;
}
function convertToUppercase(a){
    return a.toUpperCase();
}

//global variable
const LENGTH_THRESHOLD = 6;

function longerThan(a){
    return a.length >= 6;
}

var capitals = ["dublin","paris","beijing","berlin","tokyo"];

console.log("\nforEach...\n");
capitals.forEach(print);

console.log("\nsort...\n");
capitals.sort(sortByLength);
capitals.forEach(print);

console.log("\nmap...\n");
var mappedCapitals = capitals.map(convertToUppercase);
mappedCapitals.forEach(print);

console.log("\nfilter...\n");
var filteredCapitals = capitals.filter(longerThan);
filteredCapitals.forEach(print);

/**************************************************************************************/
//1st object!
var p1 = {
    name: "max",
    type: "sniper",
    health: 75
};
//console.log(p1);
p1.health = 85;
//console.log(p1);

var p2 = {
    name: "max",
    type: "sniper",
    health: 75
};

var p3 = p1; //shallow-copy of p1 i.e. p3 and p1 point to SAME obj
p3.health = 100000;
console.log(p1);

//creates a blank that we populate with COPY of data from p1
var p4 = {
    name: "",
    type: "",
    health: -1
};
//properly populated DEEP COPY
p4.name = p1.name;
//...etc

/**************************************************************************************/
var pickup1 = {
    value: 25,
    ttl: 60000, //time to live is 60,000ms = 60s
    model: {
        name: "green opal",
        type: "ammo", //efficient? integer? TODO!!!
        image: "pacman_spritesheet.jpg",
        type: "animated", //or "static"
        start_upos: 0, //position within the spritesheet
        start_vpos: 100,
        width: 50,
        height: 100,
        frames: 8
    }
};

for(var i = 0; i < pickup1.model.frames; i++){
    console.log("drawing frame..."  + i);
    console.log("wait until next frame");
}

var level1 = {
    name: "the dreaded ice dungeon",
    ttc: 600000, //10 mins max to complete
    enemies: 10, //hobgoblins
    lodif: 4, //level of difficulty
    display: function(){
        console.log(this.name + ",ttc: " + this.ttc);
        //lots of code...
    },
    reset: function(){
        this.ttc = 600000;
        this.enemies = 10;
    }
};

level1.display();
level1.reset();

/**************************************************************************************/

var person1 = {
    name: "anna",
    height: 1.9,
    eye: 1 //1=blue,2=green,3=brown,4=black
};

var person2 = {
    name: "ben",
    height: 1.88,
    eye: 2 
};

var person3 = {
    name: "ciara",
    height: 1.75,
    eye: 3 
};
var peopleArr1 = [person1, person2, person3];
var peopleArr2 = new Array();
peopleArr2.push(person1); peopleArr2.push(person2); peopleArr2.push(person3);
console.log(peopleArr1);

//use the filter() with a callback to remove eye == 1
var filteredPeople = peopleArr1.filter(filterByEye);
filteredPeople.forEach(print);

function filterByEye(animal){
    return animal.eye == 1;// && animal.height >= 1.85;
}

function filterByHeight(animal){
    return animal.height >= 1.85;
}

//use as a cascade of filters - CPU EXSPENSIZE - COST FPS
var callbackFiltersArr = [filterByEye, filterByHeight];


function applyFiltersTo(array, arrayCallbackFunctions){

    if(array == null || array.length == 0)
        throw "Invalid array - null or empty";

    //make a copy and put in filtered
    var filtered = new Array();
    for(var i = 0; i < array.length; i++)
        filtered.push(array[i]);

    //apply each successive to the SAME filtered array
    for(var i = 0; i < arrayCallbackFunctions.length; i++){
        filtered = filtered.filter(arrayCallbackFunctions[i]);
    }

    return filtered;
}

try{
    //deliberately pass in an empty array to trigger the exception
    var results = applyFiltersTo(new Array(), callbackFiltersArr);
    console.log(results);
}
catch(err){
    console.log("recovery code..." + err);
}