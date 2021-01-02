/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

//#region Sprite Data
static RUNNER_START_POSITION = new Vector2(100, 550);
static ENEMY_START_POSITION = new Vector2(850, 450);
static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space, Keys.Enter];
static RUNNER_RUN_VELOCITY = 0.1;
static RUNNER_JUMP_VELOCITY = 1.25;

static RUNNER_ANIMATION_DATA = Object.freeze({
  id: "runner_animation_data",
  spriteSheet: document.getElementById("wizardAnimationSetTransparent"),
  actorType: ActorType.Player,
  takes: {  
    "run_right" :  {   
      alpha:1,    
      fps: 5,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(70, 60), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(281, 247, 92, 64),
        new Rect(446, 250, 89, 66),
        new Rect(604, 253, 86, 62),
        new Rect(763, 253, 88, 61),
        new Rect(914, 252, 94, 61),
      ]
    },
    "run_left" : {     
      alpha:1,
      fps: 5,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(70, 60), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(282, 100, 93, 64),
        new Rect(444, 101, 88, 64),
        new Rect(605, 103, 86, 64),
        new Rect(762, 102, 89, 64),
        new Rect(923, 100, 84, 63),
      ]
    }
  }
});

static ENEMY_ANIMATION_DATA = Object.freeze({
  id: "enemy_animation_data",
  spriteSheet: document.getElementById("spritesheet_main"),
  alpha: 1,
  takes: {  
    "wasp_fly" :  {    
      fps: 16,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(35, 50), 
      cellData: [
        new Rect(20, 234, 35, 50),
        new Rect(90, 234, 35, 50),
        new Rect(160, 234, 35, 50)
      ]
    }
  }
});

static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
  id: "collectibles_animation_data",
  spriteSheet: document.getElementById("books"),
  alpha: 1,
  actorType: ActorType.Pickup,
  takes: {  
    "Book" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(30, 35), 
      cellData: [
        new Rect(3, 138, 30, 35),
        new Rect(39, 138, 30, 35),
        new Rect(76, 138, 30, 35),
        new Rect(112, 138, 30, 35),
        new Rect(148, 138, 30, 35)
      ]
    }
  }
});

//Snowy block
static PLATFORM_DATA = Object.freeze({
  id: "platform",
  spriteSheet: document.getElementById("spritesheet_platforms"),
  sourcePosition: new Vector2(0, 0),
  sourceDimensions: new Vector2(64, 64),
  rotation: 0,
  scale: new Vector2(1, 1),
  origin: new Vector2(0, 0),
  alpha: 1,
  actorType: ActorType.Platform,
  translationArray: [
    //added spaces here so that you can easily see which grouping is which on screen
    new Vector2(0, 700),
    new Vector2(64, 700),
    new Vector2(128, 700),
    new Vector2(192, 700),
    new Vector2(256, 700),
    new Vector2(320, 700),
    new Vector2(384, 700),
    new Vector2(448, 700),
    new Vector2(512, 700),
    new Vector2(576, 700),
    new Vector2(640, 700),
    new Vector2(704, 700),
    new Vector2(768, 636),
    new Vector2(832, 572),
    new Vector2(898, 508),
    new Vector2(962, 508),


    new Vector2(188,574),
    new Vector2(250, 508),
    new Vector2(314, 508),

    new Vector2(400, 450),
    new Vector2(464, 450),    
    new Vector2(530, 450),
    new Vector2(594, 450),  

    new Vector2(750, 400),  

    new Vector2(650, 800),
    new Vector2(700, 850),
  ]
});


  static BACKGROUND_DATA = [
    {
      id: "background_1",
      spriteSheet: document.getElementById("sNightSky"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(160, 128),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    },
    {
      id: "background_2",
      spriteSheet: document.getElementById("forest-2"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.15
    },
    {
      id: "background_3",
      spriteSheet: document.getElementById("forest-3"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.1
    },
    {
      id: "background_4",
      spriteSheet: document.getElementById("forest-4"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.05
    },
    {
      id: "background_5",
      spriteSheet: document.getElementById("forest-5"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    },
    {
      id: "background_houses",
      spriteSheet: document.getElementById("background_houses"),
      sourcePosition: new Vector2(0, 75),
      sourceDimensions: new Vector2(49, 38),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(0.3, 0.3),
      origin: new Vector2(0, -1650),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    },
    {
      id: "background_houses",
      spriteSheet: document.getElementById("background_houses"),
      sourcePosition: new Vector2(112, 56),
      sourceDimensions: new Vector2(65, 56),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(0.3, 0.3),
      origin: new Vector2(-1100, -1565),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    }
  
];
//#endregion

}
