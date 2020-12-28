/**
 * Render text based on text value, position, color, style, and opacity.
 * @author niall mcguinness
 * @version 1.0
 * @class TextArtist
 */

class TextArtist extends Artist {
  //#region  Fields
  text;
  textWidth;
  //#endregion

  //#region Properties
  get Text() {
    return this.text;
  }
  set Text(value) {
    this.text = value;
  }
  get Text() {
    return this.textWidth;
  }
  set Text(value) {
    this.textWidth = value;
  }
  //#endregion

  constructor(context, alpha, text, maxWidth) {
    super(context, alpha);
    this.text = text;
    this.maxWidth = maxWidth;
  }

  /**
   * Currently unused as, unlike AnimatedSpriteArtist, we are drawing the same pixel data in each draw call.
   *
   * @param {GameTime} gameTime (unused)
   * @param {Sprite} parent (unused)
   * @memberof TextArtist
   */
  Update(gameTime, parent) {}

  /**
   * Renders pixel data from spritesheet to canvas
   *
   * @param {GameTime} gameTime (unused)
   * @param {Sprite} parent Sprite object to which this artist is attached
   * @memberof TextArtist
   */
  Draw(gameTime, parent) {

    //save whatever context settings were used before this (color, line, text styles)
    this.Context.save();

    //access the transform for the parent that this artist is attached to
    let transform2D = parent.Transform2D;

    //set transparency
    this.Context.globalAlpha = this.Alpha;

    //add styles?

    //draw the text
    this.Context.fillText(
      this.text,
      transform2D.translation.x - transform2D.origin.x,
      transform2D.translation.y - transform2D.origin.y,
      this.maxWidth
    );

    //restore whatever context settings were used before save() was called above
    this.Context.restore();
  }

  //#region Equals, Clone, ToString
   Clone() {
    //to do...
    throw "Not Yet Implemented";
  }
  //#endregion
}
