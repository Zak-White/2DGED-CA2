'use strict' //throw an exception if a variable is used without being declared

window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//#region Variables
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//stores elapsed and total game time
var gameTime = null;

//stores object manager which holds all sprites
var objectManager = null;
var soundManager = null;
var keyboardManager = null;
var sprite = null;

const cueArray = [
  new AudioCue("coin_pickup", 1, 1, false, 1),
  new AudioCue("gameover", 1, 1, false, 1),
  new AudioCue("gunshot", 1, 1, false, 0),
  new AudioCue("background", 1, 1, false, 0),
  //add more cues here but make sure you load in the HTML!
];

//#endregion

//#region Functions

//#region Start & Animate
function Start() {

  //instanticate GameTime
  gameTime = new GameTime();

  //Initialize all assets (sound, textures), load all sprites, load all managers
  Initialize();

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function Animate(now) {
  //update game time
  gameTime.Update(now);

  //update all sprites whose state can change over time
  Update(gameTime);

  //draw all sprite
  Draw(gameTime);

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}
//#endregion

//#region Update, Draw & Clear
function Update(gameTime) {

  //call object manager to update all sprites
  objectManager.Update(gameTime);

//#region DEMO - REMOVE LATER
  DemoSoundManager();
  DemoHTMLDOM();
  DemoChangeTransformAndAnimationOfPlayer();
//#endregion

}


function Draw(gameTime) {
  //if we add a pattern or animate the canvas then we shouldnt clear the background
  ClearCanvas(Color.White);

  //call object manager to draw all sprites
  objectManager.Draw(gameTime);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}
//#endregion

//#endregion

/********************************* Game-Specific Variables & Functions (Change in Your Game) *********************************/
function Initialize() {

  //sets any variables we created in CSS e.g. canvas scroll speed
  //BUG - was causing a bug with drawing sprites to the screen
  ////SetAnyCSSVariables(); 

  //load managers
  LoadManagers();

  //load multiple images
  LoadImages();

  //load sprites
  LoadSprites();
}

function LoadManagers(){
  objectManager = new ObjectManager(ctx, StatusType.Drawn | StatusType.Updated);
  keyboardManager = new KeyboardManager();
  soundManager = new SoundManager(cueArray);
}

function LoadImages(){
  
  //add more here...
}

function LoadSprites(){
  LoadBackgroundSprites();
  LoadTerrainSprites();
  LoadObstacleSprites();
  LoadEnemySprites();
  LoadPlayerSprite();
  //add controller(s)
}

function LoadBackgroundSprites(){
  
}

function LoadTerrainSprites(){

}
function LoadObstacleSprites(){

}
function LoadEnemySprites(){

}
function LoadPlayerSprite(){
 
  //step 1 - create AnimatedSpriteArtist
  var takeName = "run_left";
  var artist = new AnimatedSpriteArtist(ctx, SpriteData.RUNNER_ANIMATION_DATA);

    //step 2 - set initial take
  artist.SetTake(takeName);

  //step 3 - create transform and use bounding box from initial take (this is why we make AnimatedSpriteArtist before Transform2D)
  var transform2D = new Transform2D(
          new Vector2(200, 100),                            //position
            GDMath.ToRadians(0),                            //rotation
            new Vector2(1,1),                               //scale
            new Vector2(25, 27),                            //origin - roughly since each frame is different size
            artist.GetSingleFrameDimensions(takeName)       //bounding box taken from 1st frame of current take
            );

  //step 4 - create the Sprite
  sprite = new Sprite("player1",                            //a unique id that we could use to find sprite in ObjectManager
                    ActorType.Player,                       //a type that is used to group all same type in the same row of the 2D sprites array in ObjectManager
                    StatusType.Drawn | StatusType.Updated,  //sets whether we draw AND update a Sprite 
                    transform2D,                            //transform that positions the sprite 
                    artist);                                //artist that draws the sprite
  
  //step 5(optional) - add controller(s)
  //sprite.AttachController(new PlayerController(0.12));
  sprite.AttachController(new PatrolController(new Vector2(0.6, 0), 60));

  //step 6 - add to the object manager so it is drawn (if we set StatusType.Drawn) and updated (if we set StatusType.Updated)
  objectManager.Add(sprite);                                //add to the object manager
}

//#region DEMO - REMOVE LATER
/***************************************DEMO FUNCTIONS ***************************************/
/**
 * Demos how we can transform the animated sprite (running character)
 * and change animations
 */
function DemoChangeTransformAndAnimationOfPlayer(){
  if(keyboardManager.IsKeyDown(Keys.Numpad4)){
   sprite.Transform2D.TranslateBy(new Vector2(-1, 0));
  }

  if(keyboardManager.IsKeyDown(Keys.Numpad6)){
    sprite.Transform2D.TranslateBy(new Vector2(1, 0));
  }

  if(keyboardManager.IsKeyDown(Keys.Numpad1)){
    sprite.Transform2D.RotateBy(GDMath.ToRadians(-1));
   }
 
   if(keyboardManager.IsKeyDown(Keys.Numpad9)){
     sprite.Transform2D.RotateBy(GDMath.ToRadians(1));
   }

   if(keyboardManager.IsKeyDown(Keys.Numpad8)){
    sprite.Transform2D.ScaleBy(new Vector2(0.05, 0.05));
   }
 
   if(keyboardManager.IsKeyDown(Keys.Numpad2)){
    sprite.Transform2D.ScaleBy(new Vector2(-0.05, -0.05));
   }
}

/**
 * Demos how we can use the SoundManager to play sounds
 */
function DemoSoundManager(){
  if(keyboardManager.IsKeyDown(Keys.A)){
    console.log("A was pressed!");
    soundManager.Play("coin_pickup");
  }
}


/**
 * Demos how we can set HTML DOM attributes from JS
 */
function DemoHTMLDOM(){
  if(keyboardManager.IsKeyDown(Keys.Enter)){
    let element = document.getElementById("toast");
   element.style.display = "none";

   element = document.getElementById("countdown");
   element.style.display = "block";
   element.innerHTML = "Whatever we want!";
  }

  if(keyboardManager.IsKeyDown(Keys.O)){
    HTMLDom.RevealToast("objectives", "<b><u>Objectives</u><b><br><ol>"
    + "<li><strike>Get Key</strike></li>"
    + "<li>Unlock door</li>"
    + "<li>Free prisoners</li>"
    + "</ol>", 3000);
  }
}
//#endregion