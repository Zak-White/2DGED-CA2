/*
function doSomething(a, b){

}

//objects

//bundle content
var player = {name: "john", lastname: "smith"};

//arrays of bundles content
var playerArray = [{a: "max"},{a: "bob"},{a:"ciara"}];

//pass objects into functions and return objects from functions
function getStatistics(numberArray){

    var sum = 0, product = 1;
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
        product *= numberArray[i];
    }

   // return new Pair(sum, product);
   return {s: sum, p: product};
}

let numArray = [1,2,3,4,5,6,7];
let results = getStatistics(numArray);
console.log(results.s);
console.log(results.p);

//representing structure of real-world elements
const animationData = Object.freeze({
    name: "running",
    frames: 5,
    actorType: 1, //1=enemy
    fps: 24,
    startIndex: 0,
    endIndex: 2,
    data: [
        {x: 0, y: 0, w: 16, h:24},
        {x: 16, y: 0, w: 16, h:24},
        {x: 32, y: 0, w: 16, h:24},
        {x: 48, y: 0, w: 16, h:24},
        {x: 64, y: 0, w: 16, h:24},
        {x: 80, y: 0, w: 16, h:24}
    ]
});

//const!!!!
animationData = "not animation data";

//freezes the content
animationData.name = null;



//objects and symbols
const entityType = {
    Player: Symbol("fsdfsf"), //0x23234 => 456
    Pickup: Symbol("sdfssfsdfsd"),  //0x232288 => 457
    Enemy: Symbol("sdfsdff"), //0x232288 => 510
    Background: Symbol("sdfsfsd"),
    Props: Symbol("sdfsdf"),
}

//nasty because who knows what 1 means!
initializeEntity(1);

//easier to read because the entityType allows us to replace 1 or N with a symbolic representation e.g. entityType.Player
initializeEntity(entityType.Player);

function initializeEntity(entityType){
    if(entityType == entityType.Player)
        makePlayer();
}
*/

//clone
class Account{
    name;
    id;

    constructor(id, name){
        this.name = name;
        this.id = id;
    }

    //value-type e.g. Number, String, Boolean (pass-by-copy) - deep
    //reference-type e.g. Array, Object  (pass-by-reference) - shallow
    Clone(){
        return new Account(
            this.name, //deep
            this.id    //deep
            );
    }
}

// var a1 = new Account("1234", "jane smith");
// var cloneA1 = a1.Clone();
// cloneA1.name = "john doe";
// console.log('a1.name :>> ', a1.name);
// console.log('a1.id :>> ', a1.id);

class Person{ //"has-a"
    email;
    account;

    constructor(email, account){
        this.email = email;
        this.account = account;
    }

    Clone(){
        return new Person(this.email, //deep of value-type
         //   this.account //shallow of reference-type
            this.account.Clone() //deep copy 
           );
    }
}

var p1 = new Person("jane@dkit.ie", new Account("123456", "jane smith"));
var cloneP1 = p1.Clone();

// cloneP1.email = "jane@ucd.ie";
// console.log('p1.email :>> ', p1.name);

cloneP1.account.name = "jeanice p smith";
console.log('cloneP1.account.name :>> ', cloneP1.account.name);

console.log('p1.account.name :>> ', p1.account.name);

class Engine{
    model;
    pistonArray;

    constructor(model){
        this.model = model;
        this.pistonArray = [];
    }
    addPiston(piston){
        this.pistonArray.push(piston);
    }

    Clone(){
        var cloneEngine = new Engine(this.model);
        for(let i = 0; i < this.pistonArray.length; i++){
                let piston = this.pistonArray[i];
                cloneEngine.addPiston(piston.Clone());
        }
        return cloneEngine;
    }

    ToString(){
        var str = "Model:" + this.model;
        for(let i = 0; i < this.pistonArray.length; i++){
            let piston = this.pistonArray[i];
            str += piston.ToString();
        }
        return str;
    }
}

class Piston{
    dimensions;
    material;

    constructor(dimensions, material){
        this.dimensions = dimensions;
        this.material = material;
    }

    ToString(){
        return "\n\tDimensions: " + this.dimensions.ToString() + "\n\tMaterial: " + this.material;
    }

    //deep
    Clone(){
        return new Piston(this.dimensions.Clone(), //reference-type but we call Clone = deep
            this.material);                 //value-type = deep
    }
}

class Vector3{
    x;
    y;
    z;

    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    ToString(){
        return "x: " + this.x + ", x: " + this.y + ", z: " + this.z;
    }

    //deep
    Clone(){
        return new Vector3(this.x, this.y, this.z); //pass-by-copy = deep
    }

}

var engine = new Engine("toyota");
var p1 = new Piston(new Vector3(12, 14, 3), "palladium");
engine.addPiston(p1);
engine.addPiston(new Piston(new Vector3(12, 14, 3), "titanium"));

var str = engine.ToString();
console.log(str);

console.log("\n******************************************************************\n");

//means cloneEngine is a SHALLOW copy
var cloneEngineShallow = engine;
cloneEngineShallow.addPiston(new Piston(new Vector3(18, 10, 1), "aluminium"));
console.log('engine.ToString() :>> ', engine.ToString());
console.log("\n\n\n");
console.log('cloneEngineShallow.ToString() :>> ', cloneEngineShallow.ToString());

console.log("\n******************************************************************\n");
//how do I make a deep copy?
var cloneEngineDeep = engine.Clone();
cloneEngineDeep.addPiston(new Piston(new Vector3(18, 10, 1), "aluminium"));

console.log('engine.ToString() :>> ', engine.ToString());
console.log("\n\n\n");
console.log('cloneEngineDeep.ToString() :>> ', cloneEngineDeep.ToString());

