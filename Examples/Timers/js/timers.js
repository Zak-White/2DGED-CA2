document.writeln("Open the Inspect/Console pane in Chrome to see the output...<p>");
document.writeln("Uncomment ONE of the THREE blocks of code at a time in the timer.js file to see the effects of each timer type...");

/******************************************* Demo setTimeout *******************************************/
/*
var timerHandle;
var timeInMs = 6000;

function startTimer() {
    timerHandle = setTimeout(doSomething, timeInMs);
    console.log("timer has started!");
}

function doSomething() {
    console.log("timer has elapsed!");
}

function stopTimer() {
    clearTimeout(timerHandle);
    console.log("timer has been stopped!");
}

window.addEventListener("load", startTimer);
window.addEventListener("click", stopTimer);
*/
/******************************************* Demo setInterval *******************************************/
/*
var timerHandle;
var timeInMs = 1000;

function startTimer() {
    timerHandle = setInterval(doSomething, timeInMs);
    console.log("timer has started!");
}

function doSomething() {
    console.log("timer has elapsed!");
}

function stopTimer() {
    clearInterval(timerHandle);
    console.log("timer has been stopped!");
}

window.addEventListener("load", startTimer);
window.addEventListener("click", stopTimer);
*/
/******************************************* Demo requestAnimationFrame *******************************************/

function loadGame() {
    window.requestAnimationFrame(animate);
    console.log("timer has started!");
}

function animate() {
    console.log("animating...");
    update();
    draw();
    window.requestAnimationFrame(animate);
}

function update() {
    console.log("updating...");
}
function draw() {
    console.log("drawing...");
}

window.addEventListener("load", loadGame);
