
/**
 * Defines the actors we find in the game. We assign each new actor with a unique number.
 * The numbers will be used to set the draw order for the actors (i.e. Background first, then NPC etc)
 * 
 * @see Actor2D::Actor2D
 */
const ActorType = Object.freeze({
  /*
   * VERY IMPORTANT - The order of the actors below DEFINES the draw order
   * which means if we were, for example to set Background to 20 that it would be
   * the highest number and the LAST drawn. That would mean we would NOT see anything
   * EXCEPT the background sprites because it would be OVERDRAWING everything else.
   */
  Background: 0,
  NPC: 1,
  Player: 2,
  Projectile: 3,
  //add as many actor types as your game needs here BUT remember that the assigned number will determine drawn sort order...
});

/**
 * Used to draw color to the screen e.g. ClearScreen(Color.Black)
 * @see Draw() method in your main game JS file (e.g. SpaceInvaders.js)
 */
const Color = Object.freeze({
  Black: "#000000",
  White: "#FFFFFF",
  Grey: "#8b8680",
  CornFlowerBlue: "#6495ed",
  LightGreen: "#CACB63",
  DarkGreen: "#688318",
  PaleYellow: "rgb(255, 255, 231)" //we can also specify in rgb() format too
  //add more colors that you use often here
  //Use https://html-color-codes.info/colors-from-image/ to determine hex codes for colors that you use in free 3rd party images/sprites that you find online
});


