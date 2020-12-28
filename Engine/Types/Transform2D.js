/**
 * Stores all the transformations applied to a 2D element (e.g. a sprite, a menu button, a Camera2D)
 * @author niall mcguinness
 * @version 1.0
 * @class Transform2D
 */

class Transform2D {
  //#region Fields
  //#endregion

  //#region Statics
  static get Zero() {
    return new Transform2D(Vector2.Zero, 0, Vector2.Zero);
  }
  //#endregion

  //#region Properties
  get Translation() {
    return this.translation;
  }
  get RotationInRadians() {
    return this.rotationInRadians;
  }
  get Scale() {
    return this.scale;
  }
  get Origin() {
    return this.origin;
  }
  get Dimensions() {
    return this.dimensions;
  }
  get IsDirty() {
    return this.isDirty;
  }
  set Dimensions(value) {
    this.dimensions = value.Clone();
    this.isDirty = true;
  }
  set Translation(value) {
    this.translation = value.Clone();
    this.isDirty = true;
  }
  set RotationInRadians(value) {
    this.rotationInRadians = value;
    this.isDirty = true;
  }
  set Scale(value) {
    this.scale = value.Clone();
    this.isDirty = true;
  }
  set Origin(value) {
    this.origin = value.Clone();
    this.isDirty = true;
  }
  set IsDirty(value) {
    this.isDirty = value;
  }
  //#endregion

  //#region Constructors and Core methods
  
  /**
   * Creates an instance of Transform2D which is used to store the translation, rotation, scale, origin and original dimensions of a draw sprite (static or animated)
   *
   * @param {Vector2} translation Vector2 with the position of the sprite on the screen
   * @param {Number} rotationInRadians Floating-point angle in radians to rotate the sprite (+ve = CW, -ve=CCW)
   * @param {Vector2} scale Vector2 with the scale of the sprite on the screen
   * @param {Vector2} origin Vector2 centre of rotation for the image between (0,0) and (w,h) of the original image
   * @param {Vector2} dimensions Vector2 original dimensions of the sprite in the image
   * @memberof Transform2D
   */
  constructor(translation, rotationInRadians, scale, origin, dimensions) {
    this.translation = translation;
    this.rotationInRadians = rotationInRadians;
    this.scale = scale;
    this.origin = origin;
    this.dimensions = dimensions;
  }

  /**
   * Sets the translation of the sprite to a user-defined value. Sets the isDirty flag to
   * indicate to the CollisionPrimitive that the sprite has changed a property that will
   * affect its bounding primitive.
   *
   * @param {Vector2} translation
   * @memberof Transform2D
   */
  SetTranslation(translation) {
    this.translation = translation.Clone();
  }

  /**
   * Increases/decreases the Vector2 translation of the sprite. We can use
   * this method to move the sprite on-screen. Sets the isDirty flag to indicate to the
   * CollisionPrimitive that the sprite has changed a property that will affect its bounding primitive.
   *
   * @param {Vector2} translateBy Vector2 value used to increment/decrement the translation.
   * @memberof Transform2D
   */
  TranslateBy(translateBy) {
    this.translation.Add(translateBy);
  }

  /**
   * Sets the rotation value (in radians) for the sprite.
   *
   * @param {number} rotationInRadians Floating-point rotation value in radians
   * @memberof Transform2D
   */
  SetRotationInRadians(rotationInRadians) {
    this.rotationInRadians = rotationInRadians;
  }

  /**
   * Increases/decreases the rotation value (in radians) for the sprite.
   *
   * @param {number} rotationInRadians Floating-point rotation value in radians
   * @memberof Transform2D
   */
  RotateBy(rotationInRadiansBy) {
    this.rotationInRadians += rotationInRadiansBy;
    this.isDirty = true;
  }

  /**
   * Sets the scale values for the sprite.
   *
   * @param {Vector2} scale Vector2 representing the scale (x,y) values
   * @memberof Transform2D
   */
  SetScale(scale) {
    this.scale = scale.Clone();
    this.isDirty = true;
  }

  /**
   * Increases/decreases the scale values for the sprite.
   *
   * @param {Vector2} scale Vector2 representing the scale (x,y) values
   * @memberof Transform2D
   */
  ScaleBy(scaleBy) {
    this.scale.Add(scaleBy);
    this.isDirty = true;
  }
  //#endregion

  //#region Equals, Clone, ToString
  Equals(other) {
    return (
      GDUtility.IsSameTypeAsTarget(this, other) &&
      this.translation.Equals(other.translation) &&
      this.rotationInRadians === other.rotationInRadians &&
      this.scale.Equals(other.Scale) &&
      this.origin.Equals(other.Origin) &&
      this.dimensions.Equals(other.Dimensions)
    );
  }

  //deep-copy
  Clone() {
    return new Transform2D(
      this.translation.Clone(), //ref
      this.rotationInRadians,   //value
      this.scale.Clone(),        //ref
      this.origin.Clone(),        //ref
      this.dimensions.Clone()    //ref
    );
  }

  ToString() {
    return (
      "[" +
      this.translation.ToString() +
      "," +
      this.rotationInRadians +
      "," +
      this.scale.ToString() +
      "," +
      this.origin.ToString() +
      "," +
      this.dimensions.ToString() +
      "]"
    );
  }
  //#endregion
}
