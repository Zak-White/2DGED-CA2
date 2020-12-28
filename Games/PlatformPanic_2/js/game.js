"use strict"; //throw an exception if a variable is used without being declared

window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//#region Core Variables [DO NOT CHANGE]
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//stores elapsed and total game time
var gameTime = null;

//managers
var objectManager = null;
var soundManager = null;
var keyboardManager = null;

//#endregion

//#region Functions

//#region Start & Animate
function Start() {
  //instanticate GameTime
  gameTime = new GameTime();

  //load managers
  LoadManagers();

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


/**
 * Loads the code managers used by the game (object, keyboard, sound)
 */
function LoadManagers() {
  objectManager = new ObjectManager(ctx, StatusType.Drawn);
  keyboardManager = new KeyboardManager();
  soundManager = new SoundManager(cueArray);
}

//#endregion

//#region Update, Draw & Clear
function Update(gameTime) {
  //call object manager to update all sprites
  objectManager.Update(gameTime);

  //Check for menu, win/lose, sound events
  HandleInput(gameTime);
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
//#region Game Specific Variables [CHANGE FOR YOUR GAME]
//stores object manager which holds all sprites

const cueArray = [
  new AudioCue("coin_pickup", 1, 1, false, 1),
  new AudioCue("gameover", 1, 1, false, 1),
  new AudioCue("gunshot", 1, 1, false, 0),
  new AudioCue("background", 0.6, 1, true, 0),
  //add more cues here but make sure you load in the HTML!
];

var lives = 5;
var score = 0;
//#endregion

function Initialize() {

  //load sprites
  LoadSprites();

}


/**
 * Use this function to check for keyboard or mouse input and start the game, mute sounds,
 * show/hide UI elements
 *
 * @param {*} gameTime
 */
function HandleInput(gameTime) {

  //is the game starting
  if (keyboardManager.IsKeyDown(Keys.Enter)) {
    StartGame(gameTime);
  }

  //add more code to check for input (e.g. O for Objective)

  //is score == 0
    //sound
    //show div
    //pause object manager
}

function StartGame(gameTime){

  //set any win/lose variables
  var livesElement = document.getElementById("ui_lives");
  livesElement.style.display = "block";
  livesElement.innerHTML = "<strike>hello</strike> - " + lives + "/5";

  var scoreElement = document.getElementById("ui_score");
  scoreElement.style.display = "block";
  scoreElement.innerHTML = score;

  //Hide "Press Enter"
  document.getElementById("menu_opening").style.display = "none";

  //unpause game
  objectManager.StatusType = StatusType.Drawn | StatusType.Updated;

  //play sound
  soundManager.Play("background");
}

function LoadSprites() {
  LoadPlayerSprite();
  LoadPlatformSprites();
  LoadBackgroundSprites();

  //to do...
  //LoadPickupSprites()
  //LoadEnemySprites();
}

function LoadBackgroundSprites() {
  var backgroundData = SpriteData.BACKGROUND_DATA;

  for (let i = 0; i < backgroundData.length; i++) {
    let spriteArtist = new SpriteArtist(
      ctx,
      backgroundData[i].spriteSheet,
      backgroundData[i].alpha,
      backgroundData[i].sourcePosition,
      backgroundData[i].sourceDimensions
    );

    let transform = new Transform2D(
      backgroundData[i].translation,
      backgroundData[i].rotation,
      backgroundData[i].scale,
      backgroundData[i].origin,
      new Vector2(cvs.clientWidth, cvs.clientHeight)
    );

    objectManager.Add(
      new Sprite(
        backgroundData[i].id,
        backgroundData[i].actorType,
        StatusType.Updated | StatusType.Drawn,
        transform,
        spriteArtist,
        backgroundData[i].layerDepth
      ));
  }
}

function LoadPlatformSprites() {
  var platformData = SpriteData.PLATFORM_DATA;

  let spriteArtist = new SpriteArtist(
    ctx,
    platformData.spriteSheet,
    platformData.alpha,
    platformData.sourcePosition,
    platformData.sourceDimensions
  );

  let transform = new Transform2D(
    platformData.translationArray[0],
    platformData.rotation,
    platformData.scale,
    platformData.origin,
    platformData.sourceDimensions
  );

  let platformSprite = new Sprite(
    platformData.id,
    platformData.actorType,
    StatusType.Updated | StatusType.Drawn,
    transform,
    spriteArtist
  );

  let clone = null;

  for (let i = 0; i < platformData.translationArray.length; i++) {
    clone = platformSprite.Clone();
    clone.Transform2D.Translation = platformData.translationArray[i];
    objectManager.Add(clone);
  }
}

function LoadPlayerSprite() {
  //step 1 - create AnimatedSpriteArtist
  var takeName = "run_right";
  var artist = new AnimatedSpriteArtist(ctx, SpriteData.RUNNER_ANIMATION_DATA);

  //step 2 - set initial take
  artist.SetTake(takeName);

  //step 3 - create transform and use bounding box from initial take (this is why we make AnimatedSpriteArtist before Transform2D)
  var transform2D = new Transform2D(
    new Vector2(100, 100), //position
    GDMath.ToRadians(0), //rotation
    new Vector2(1, 1), //scale
    new Vector2(25, 27), //origin - roughly since each frame is different size
    artist.GetSingleFrameDimensions(takeName) //bounding box taken from 1st frame of current take
  );

  //step 4 - create the Sprite
  var sprite = new Sprite(
    "player1", //a unique id that we could use to find sprite in ObjectManager
    ActorType.Player, //a type that is used to group all same type in the same row of the 2D sprites array in ObjectManager
    StatusType.Drawn | StatusType.Updated, //sets whether we draw AND update a Sprite
    transform2D, //transform that positions the sprite
    artist
  ); //artist that draws the sprite

  //step 5(optional) - add any controller(s)
  sprite.AttachController(new BulletController(new Vector2(1, 0), 5));

  //step 6 - add to the object manager so it is drawn (if we set StatusType.Drawn) and updated (if we set StatusType.Updated)
  objectManager.Add(sprite); //add to the object manager
}


function LoadEnemySprites() {
  //to do...
}

//#region DEMO - REMOVE LATER
/***************************************DEMO FUNCTIONS ***************************************/

//#endregion
