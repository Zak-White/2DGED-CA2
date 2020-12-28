document.writeln("Open the Inspect/Console pane in Chrome to see the output...");

runExercises();

function runExercises()
{
    /*
    const name = "dkit";

    const password = Symbol("password");
    const user = {
        first: "jane",
        age: 22,
        [password]: "my secret value",
        subscription: "un-validated"
    };

    user.currency = "Yen";
    user.subscription = "Platinum";
    const subscription = new Symbol();

    user[subscription] = "Platinum";



    //object creation -> read object -> adds/edits object -> reads for some new value
    //Destiny 2 server
        //create template user account
                //initialise user preferences by locality
                            //check balance on the new account
                                    
//    console.log('p :>> ', p);
    console.log('Object :>> ', Object.keys(p));
    console.log('Object :>> ', Object.getOwnPropertyDescriptor(p));
    console.log('Object :>> ', Object.getOwnPropertyNames(p));
    console.log('Object :>> ', Object.getOwnPropertySymbols(p)[0]);
    
    var symbolsArray = Object.getOwnPropertySymbols(p);


//     //in some other place in the code...
//     console.log('Object :>> ', Object);  p.somethingNew = "a new field";

    const TaskPriority = Object.freeze({ 
        Low: Symbol("Low"),         //450
        Medium: Symbol("Medium"),   //555,555
        High: Symbol("High")        //34
    });
  
    TaskPriority.Medium = 999999;
*/
    /*************************************************************************/
/*
    let printFE = function(x){
        console.log('x :>> ', x);
    };

    printFE("hello world!");
    doSomethingExpression("boo!!", 24);

    //arrow function is anonymous i.e. it has no assigned name until we assign
    let printAF = (a) => {
        console.log('a :>> ', a);
    };
    printAF("goodbye!");
*/

    var bikes = new Array();
    bikes.push({make: "raleigh", price: 100, gears: 21});
    bikes.push({make: "carrera x", price: 200, gears: 14});
    bikes.push({make: "indur a", price: 500, gears: 14});
    bikes.push({make: "indur b", price: 1000, gears: 7});
    bikes.push({make: "carrera y", price: 600, gears: 21});

    var displayFn = (bike) => {
        console.log(bike.make + ", " + bike.price);
    };

  //  display(bikes, displayFn);

    // display(bikes, (b) => {
    //     console.log('b.price :>> ', b.price);
    // });  
    
    var filterFn = (bike) => { 
        return bike.price >= 500 && bike.price <= 1000;
    };

    filter(bikes, filterFn, displayFn);

    var showSqrt = (value) => {
        console.log("Sqrt of " + value + " is " + Math.sqrt(value));
    };

    var numArray = [5,1,7,89,2,4,8,9,12,14];
    numArray.forEach(showSqrt);

    var game1 = { 
        title: "gotham knights",
        price: 41,
        PEGI: 18
    };

    var game2 = { 
        title: "godfall",
        price: 99.99,
        PEGI: 18
    };

    var gamesArray = [game1, game2];

    var gamePredicate = (game) => {
        return game.price > 40 && game.PEGI > 15;
    };

    const results = gamesArray.filter(gamePredicate);
    console.log('results :>> ', results);

    var add = (a, b) => {return a + b;};
    add(3, 2);


    const bikeResults = bikes.filter(bikePredicate.gears);
    console.log('bikeResults :>> ', bikeResults);
    console.log('bikeResults :>> ', bikeResults);
}

const bikePredicate = Object.freeze({
    price: (bike) => {return bike.price > 100;},
    gears: (bike) => {return bike.gears == 21},
    make: function(bike){ return bike.make === "carrera";}
});

function filter(array, filterFn, displayFn){
    for(let i = 0; i < array.length; i++){
        if(filterFn(array[i]))
            displayFn(array[i]);
    }
}

function display(array, displayFn){
    for(let i = 0; i < array.length; i++){
        displayFn(array[i]);
    }
}

//function declaration
function doSomething(msg, value){
    console.log(msg + ": " + value);
}

//function expression
var doSomethingExpression = function(msg, value){
    console.log(msg + ": " + value);
};




