"use strict";
window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

const cueArray = [
  new AudioCue("coin_pickup", 1, 1, false, 0),
  new AudioCue("gameover", 1, 1, false, 0),
  new AudioCue("gunshot", 1, 1, false, 0),
  //add more cues here but make sure you load in the HTML!
];

var keyboardManager;
var soundManager;

//start the loop
function Start() {

  //LoadManagers();
  keyboardManager = new KeyboardManager();
  soundManager = new SoundManager(cueArray);

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function Animate(now) {
  //update all sprites whose state can change over time
  Update();

  //draw all sprite
  Draw();

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}

function Update() {
  if(keyboardManager.IsKeyDown("KeyA")){
    console.log("A was pressed!");
    soundManager.Play("coin_pickup");
  }

  if(keyboardManager.IsKeyDown(Keys.Numpad1)){
    console.log("B was pressed!");
    soundManager.Play("gameover");
  }

}

function Draw() {}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}


