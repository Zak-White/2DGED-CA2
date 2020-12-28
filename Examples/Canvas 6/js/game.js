"use strict";
window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var keyboardManager = new KeyboardManager();

//start the loop
function Start() { 

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

var menuIndex = -1;

function Update() {

 if(keyboardManager.IsKeyDown(Keys.Q)){
        document.getElementById("menu_opening").style.display = "block";
        document.getElementById("menu_instructions").style.display = "none";
        document.getElementById("menu_winlose").style.display = "none";
        document.getElementById("main_game").style.display = "none";
      } 
 
 if(keyboardManager.IsKeyDown(Keys.W)){
    document.getElementById("menu_opening").style.display = "none";
    document.getElementById("menu_instructions").style.display = "block";
    document.getElementById("menu_winlose").style.display = "none";
    document.getElementById("main_game").style.display = "none";
  } 

  if(keyboardManager.IsKeyDown(Keys.E)){
    document.getElementById("menu_opening").style.display = "none";
    document.getElementById("menu_instructions").style.display = "none";
    document.getElementById("menu_winlose").style.display = "none";
    document.getElementById("main_game").style.display = "block";
  } 
  if(keyboardManager.IsKeyDown(Keys.R)){
    document.getElementById("menu_opening").style.display = "none";
    document.getElementById("menu_instructions").style.display = "none";
    document.getElementById("menu_winlose").style.display = "block";
    document.getElementById("menu_winlose").innerHTML = "Better luck next time!";
    document.getElementById("main_game").style.display = "none";
  } 


}

function Draw() {
  ClearCanvas("rgb(255,255,255)");

}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}


