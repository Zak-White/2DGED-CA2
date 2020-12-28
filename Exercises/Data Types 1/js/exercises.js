document.writeln("Open the Inspect/Console pane in Chrome to see the output...");


runExercises();
function runExercises()
{
    var degrees = 45;

    try{
        var rads = toRadians(null);
        console.log(degrees + " is " + rads + " rads");
    }
    catch(err){
        console.log(err);
        //try to recover or degrade gracefully
    }

    try{
        console.log(arePythagorean(3, 4, 5));
    }catch(err){
        console.log(err);
    }
}

/*****************************************************************************/
function arePythagorean(opp, adj, hyp){
    if(!isValidNumber(opp) || !isValidNumber(adj) || !isValidNumber(hyp))
            throw "opp, adj, and hyp must all be valid integers";
    
    return Math.pow(opp, 2) + Math.pow(adj, 2) == Math.pow(hyp, 2);
}

function isValidNumber(value){
    if (value != null && typeof(value) == "number" && !isNaN(value))
        return true;
    else
        throw "value must be a number type";
}

function toRadians(degrees){  
    if(degrees == undefined || degrees == null || typeof(degrees) != "number" || isNaN(degrees))
            throw "degrees value provided is invalid!";
    return degrees * Math.PI/180;
}

function toUpperStringArray(array){
    if(array == undefined || array == null || array.length == 0 || typeof (array[0]) != "string")
        throw "Exception!";
    return 1;
}

function isPowerTwo(value){
    isValidNumber(value);

    var logValue = Math.LN2(value);
    //to do....test if logValue is floating point?
    return true;
}


























/**************************************************************************/
/*
var user;  //undefined is declared but not initialized
user = "Niall"; //interpreter know that this type is a string and its value is "Niall"

function search(array, value){
    return null;
}

console.log(typeof("Niall"));
console.log(typeof(true));
console.log(typeof(21));
console.log(typeof(3.14));
console.log(new Array());
console.log({name: "jack", age: 21});

var x = 0.0000000001;
var y = 0.000000000099999;
var z = 1E-9;

if(Math.abs(x - y) < Number.EPSILON)
    console.log("Same values");
*/