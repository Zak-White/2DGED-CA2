/**
 * Represents a 2D vector within the game engine. Used in Transform2D to store translation, scale and dimensions of a Sprite.
 * @author niall mcguinness
 * @version 1.0
 * @class Vector2
 */
class Vector2 {
  //#region Fields
  isDirty = true;
  //#endregion

  //#region Properties

  /**
   *
   * Returns an instance of a Vector2 object with x,y of (0,0).
   * @example
   * let v = Vector2.Zero;
   *
   * @readonly
   * @static
   * @memberof Vector2
   */
  static get Zero() {
    return new Vector2(0, 0);
  }

  /**
   *
   * Returns an instance of a Vector2 object with x,y of (1,1).
   * @example
   * let v = Vector2.One;
   *
   * @readonly
   * @static
   * @memberof Vector2
   */
  static get One() {
    return new Vector2(1, 1);
  }

  /**
   *
   * Returns an instance of a Vector2 object with x,y of (1,0).
   * @example
   * let v = Vector2.UnitX;
   *
   * @readonly
   * @static
   * @memberof Vector2
   */
  static get UnitX() {
    return new Vector2(1, 0);
  }

  /**
   *
   * Returns an instance of a Vector2 object with x,y of (0, 1).
   * @example
   * let v = Vector2.UnitY;
   *
   * @readonly
   * @static
   * @memberof Vector2
   */
  static get UnitY() {
    return new Vector2(0, 1);
  }
  get X() {
    return this.x;
  }
  get Y() {
    return this.y;
  }
  set X(value) {
    this.x = value;
  }
  set Y(value) {
    this.y = value;
  }
  //#endregion

  //#region Constructors and Core methods

  /**
   * Returns a Vector2 object
   * @param {Number} x
   * @param {Number} y
   * @memberof Vector2
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Modifies the Vector2 by adding the individual (x,y) values of a second Vector2 object to the object
   * @param {Rect} other A Vector2 object
   * @memberof Vector2
   */
  Add(other) {
    this.x += other.x;
    this.y += other.y;
  }

  /**
   * Modifies the Vector2 by subtracting the individual (x,y) values of a second Vector2 object from the object
   * @param {Rect} other A Vector2 object
   * @memberof Vector2
   */
  Subtract(other) {
    this.x -= other.x;
    this.y -= other.y;
  }

  /**
   * Modifies the Vector2 by multiplying the (x,y) values by the individual (x,y) values of a second Vector2 object
   * @param {Rect} other A Vector2 object
   * @memberof Vector2
   */
  Multiply(other) {
    this.x *= other.x;
    this.y *= other.y;
  }

  /**
   * Modifies the Vector2 by multiplying the (x,y) values by a scalar quantity
   * @param {Number} s A scalar quantity
   * @memberof Vector2
   */
  MultiplyScalar(s) {
    this.x *= s;
    this.y *= s;
  }

  /**
   * Modifies the Vector2 by dividing the (x,y) values by the individual (x,y) values of a second Vector2 object
   * @param {Number} s A scalar quantity
   * @throws Exception if either x or y value of the other vector == 0
   * @memberof Vector2
   */
  Divide(other) {
    //divide by 0!
    if (other.x == 0 || other.y == 0) throw "Error: Cannot divide by zero!";

    this.x /= other.x;
    this.y /= other.y;
  }

  /**
   * Modifies the Vector2 by dividing the (x,y) values by a scalar quantity
   * @param {Number} s A scalar quantity
   * @throws Exception if either x or y value of the other vector == 0
   * @memberof Vector2
   */
  DivideScalar(s) {
    //divide by 0!
    if (s == 0) throw "Error: Cannot divide by zero!";

    this.x /= s;
    this.y /= s;
  }

  /**
   * Returns the dot product (A.B) of two Vector2 objects, where dot = |A|.|B|.Cos(x) and x is angle between A and B in radians
   * @param {Vector2} other A Vector2 object
   * @returns {Number} Dot product
   * @memberof Vector2
   */
  Dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Returns the angle in radians between to Vector2 objects which is calculated using the Dot() method
   * @param {Vector2} other A Vector2 object
   * @returns {Number} Angle in radians
   * @memberof Vector2
   */
  AngleInRadiansBetween(other) {
    return Math.acos(this.Dot(other) / (this.Length() * other.Length()));
  }

  /**
   * Returns the length of a Vector2 object
   * @returns {Number} Length of the Vector2
   * @memberof Vector2
   */
  Length() {
    if (this.isDirty) {
      this.length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); //PYTHAGORAS
      this.isDirty = false;
    }
    return this.length;
  }

  /**
   * Returns the Euclidean (i.e. straight line) distance between two points in 2D space
   * @param {Vector2} other A Vector2 object
   * @returns {Number} Distance between the two vectors
   * @memberof Vector2
   */
  Distance(other) {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
    );
  }

  /**
   * Modifies the Vector2 object where the (x,y) values have had the Math.abs() method applied.
   * @memberof Vector2
   */
  Abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
  }

  /**
   * Modifies the Vector2 object where the (x,y) values have had the Math.abs() method applied.
   * @memberof Vector2
   */
  Round(precision) {
    this.x = GDMath.ToFixed(this.x, precision, 10);
    this.y = GDMath.ToFixed(this.y, precision, 10);
  }

  /**
   * Modifies the Vector2 object by normalising its length (i.e. == 1)
   * @throws Throws an exception if length == 0
   * @memberof Vector2
   */
  Normalize() {
    var len = this.Length();

    if (len == 0)
      throw "Error: Divide by zero error on Normalize()! Is the vector non-zero?";

    this.x /= len;
    this.y /= len;
  }
  //#endregion

  //#region Static Methods
  static Add(vector1, other) {
    return new Vector2(vector1.x + other.x, vector1.y + other.y);
  }

  //let vC = Vector2.Substract(vA, vB);
  static Subtract(vector1, other) {
    return new Vector2(vector1.x - other.x, vector1.y - other.y);
  }

  static Multiply(vector1, other) {
    return new Vector2(vector1.x * other.x, vector1.y * other.y);
  }

  static MultiplyScalar(vector, scalar) {
    return new Vector2(vector.x * scalar, vector.y * scalar);
  }

  static Divide(vector1, other) {
    if (other.x == 0 || other.y == 0) throw "Error: Cannot divide by zero!";

    return new Vector2(vector1.x / other.x, vector1.y / other.y);
  }

  static DivideScalar(vector, scalar) {
    if (scalar == 0) throw "Error: Cannot divide by zero!";

    return new Vector2(vector.x / scalar, vector.y / scalar);
  }

  static Normalize(vector) {
    var len = vector.Length();
    if (len == 0)
      throw "Error: Divide by zero error on Normalize()! Is the vector non-zero?";
    return new Vector2(vector.x / len, vector.y / len);
  }

  static Distance(vector1, other) {
    return vector1.Distance(other);
  }

  static Abs(vector) {
    return new Vector2(Math.abs(vector.x), Math.abs(vector.y));
  }

  static Round(vector, precision) {
    return new Vector2(
      GDMath.ToFixed(vector.x, precision, 10),
      GDMath.ToFixed(vector.y, precision, 10)
    );
  }
  //#endregion

  //#region Equals, Clone, ToString
  Equals(other) {
    return (
      GDUtility.IsSameTypeAsTarget(this, other) &&
      this.x === other.x &&
      this.y === other.y
    );
  }

  //deep-copy => (x,y) =>
  Clone() {
    return new Vector2(this.x, this.y);
  }

  ToString() {
    return "[" + this.x + "," + this.y + "]";
  }
  //#endregion
}
