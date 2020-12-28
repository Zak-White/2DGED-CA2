'use strict'
window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//variables used by the game
var spriteSheet = null;
var scoreSprite = null;
var scoreSprite2 = null;

var objectManager = null;

//start the loop
function Start() {

  var x = StatusType.Off;
  var y = StatusType.Updated;
  var z = StatusType.Drawn;

  // | is a bitwise OR 1 | 2 
  //0001
  //0010
  //0011 (3)

  //0101 (5)
  //1001 (9)
  //1101 (13) OR

  //0101 (5)
  //1001 (9)
  //0001 (1)

  //0011 (3)
  //0010 (2)
  //0010 (>0)

  var yz = StatusType.Updated | StatusType.Drawn;






  LoadManagers();
  LoadUI();
  LoadGameObject();

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function LoadManagers(){
  objectManager = new ObjectManager(ctx, 
    StatusType.Drawn | StatusType.Updated);
}

function LoadGameObject(){

  var clonePlatform = null;

  var archetypalPlatformSprite = new Sprite("platform", ActorType.Platform, 
                        ctx, 120, 240, new RectangleArtist(25, 5, 2, "red"));

  for(let i = 1; i <= 15; i++){
      clonePlatform = archetypalPlatformSprite.Clone();
      //clonePlatform.artist.strokeStyle = "green";
      clonePlatform.x += 30 * i;
      clonePlatform.y -= 15 * i;
      objectManager.Add(clonePlatform);
  }
}

function LoadUI(){

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
 objectManager.Update(null);
}

function Draw() {

  objectManager.Draw(null);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}