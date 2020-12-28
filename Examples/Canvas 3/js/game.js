'use strict'

window.addEventListener("load", Start);
window.addEventListener("keydown", evt =>{

    console.log(evt.key);
    console.log(evt.code);
    console.log(evt);
    if(evt.key == "ArrowUp"){ //"up"
      rectA.Move(0, -4);
    }
    else if(evt.key == "ArrowDown"){ //"down"
      rectA.Move(0, 4);
    }

    if(evt.key == "ArrowLeft"){ //"up"
      rectA.Move(-4, 0);
    }
    else if(evt.key == "ArrowRight"){ //"down"
      rectA.Move(4, 0);
    }
});

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/
/**
 * To:
 * 1. Draw 2 rectangles
 * 2. Set the strokeStyle to be "red"
 * 3. Add keyboard input
 */

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var bOverlap = false;

var rectA = new Rect(10, 50, 50, 50);
var rectB = new Rect(50, 50, 540, 380);

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

function Update() {
//  if(rectA.Intersects(rectB))
//   bOverlap = true;
//  else
//   bOverlap = false;

  if(rectB.Contains(rectA))
  bOverlap = true;
 else
  bOverlap = false;

}

function Draw() {
  ClearCanvas("rgb(255, 255, 231)");

  ctx.save();
 // ctx.globalAlpha = 0.2;
 if(!bOverlap)
    ctx.strokeStyle = "green";
 else
    ctx.strokeStyle = "red";    
  ctx.strokeRect(rectA.x, rectA.y, rectA.width, rectA.height);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "blue";
  ctx.strokeRect(rectB.x, rectB.y, rectB.width, rectB.height);
  ctx.restore();

}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}