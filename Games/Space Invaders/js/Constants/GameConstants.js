/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

  //blue
  static ENEMY_ONE_ANIMATED_SPRITE = [new Rect(0,0,22,16), new Rect(0,16,22,16)];
  //blue
  static ENEMY_TWO_ANIMATED_SPRITE = [new Rect(23,0,14,15), new Rect(23,17,14,15)];
  //blue
  static ENEMY_THREE_ANIMATED_SPRITE = [new Rect(38,0,24,16), new Rect(38,16,24,16)];

  //barrier
  static BARRIER_SPRITE = [
    {
      sourcePosition: new Vector2(24, 36),
      sourceDimensions: new Vector2(84, 8)
    }
  ];

  //player
   static PLAYER_SPRITE = [
    {
      sourcePosition: new Vector2(62, 0),
      sourceDimensions: new Vector2(22, 16)
    }
  ];

  // static ENEMY_ONE_FRAMES = [
  //   { //animation frame 1
  //     x: 0,
  //     y: 0,
  //     width: 22,
  //     height: 16,
  //   },
  //   { //animation frame 2
  //     x: 0,
  //     y: 16,
  //     width: 22,
  //     height: 16,
  //   },
  // ];

  // static BARRIER_HEIGHT = 24;
  // static BARRIER_WIDTH = 36;
  // static BARRIER_x = 84;
  // static BARRIER_y = 8;
}
