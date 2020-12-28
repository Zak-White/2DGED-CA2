//add a new class with static methods to provide useful functionality for use in our engine
class GDUtilities {
  /**
   * Returns true if "other" is non-null, defined and same as type "target".
   * For example we can use this method to see if two Sprite objects are the same type.
   *
   * @static
   * @param {Object} target
   * @param {Object} other
   * @returns {Boolean} True if target and other are the same data type, otherwise false
   * @throws Exception if other object is null or undefined
   * @see Actor2D::Equals()
   * @memberof GDUtility
   */
  static IsSameTypeAsTarget(target, other) {
    if (other == null || other == undefined)
      throw "Error: Other object is null or undefined";

    if (other.constructor.name != target.constructor.name)
      throw (
        "Error: Other object is type " +
        other.constructor.name +
        " and should be type " +
        target.constructor.name
      );

    //returns false if both point to the same object in RAM i.e. a shallow copy
    return target != other;
  }

  /**
   * Returns a random integer in the range lo - hi
   *
   * @static
   * @param {number} lo Integer
   * @param {number} hi Integer
   * @returns {Number} Random integer
   * @throws Exception if lo or hi are undefined or lo > hi
   * @memberof GDUtilities
   */
  static getRandomInRange(lo, hi) {
    //failure tests
    if (lo == undefined || hi == undefined)
      //    || typeof(exclValues[0]) == "number")
      throw "One or more parameters is undefined";

    if (lo > hi) throw "Lo value must be less than hi!";

    return Math.round((hi - lo) * Math.random() + lo);
  }
  /**
   * Returns a random integer in the range lo-hi excluding any numbers listed on the exclValues array
   *
   * @static
   * @param {number} lo Integer
   * @param {number} hi Integer
   * @param {*} exclValues Array of integer values to exclude (e.g. -10, 10, [2, 3, 4])
   * @returns {Number} Random integer
   * @throws Exception if lo or hi are undefined, or lo > hi, or exclValues is null or undefined
   * @memberof GDUtilities
   */
  static getRandomInRangeExcl(lo, hi, exclValues) {
    //failure tests
    if (
      lo == undefined ||
      hi == undefined ||
      exclValues == undefined ||
      exclValues == null
    )
      throw "One or more parameters is undefined";

    if (exclValues.length == 0)
      return Math.round((hi - lo) * Math.random() + lo);

    if (lo > hi) throw "Lo value cannot be greater than value!";

    var numArray = new Array();
    var bCollision = false;

    for (let i = lo; i <= hi; i++) {
      for (let j = 0; j < exclValues.length; j++) {
        if (i == exclValues[j]) {
          bCollision = true;
          break;
        }
      }
      if (!bCollision) numArray.push(i);
      bCollision = false;
    }

    //now I have an array with values lo->hi and excluding exclValues and I shuffle
    GDUtilities.shuffle(numArray);

    var randPos = Math.round(Math.random() * numArray.length - 1);
    //return the first shuffled value
    return numArray[randPos];
  }

  /**
   * Randomly shuffles the elements in an array of any type (e.g. number, string)
   *
   * @static
   * @param {Array} array An array of values of any type
   * @returns {Array} Array of shuffled values
   * @memberof GDUtilities
   * @see https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
   * @author Geeksforgeeks
   * @since October 2020
   */
  static shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

/************************************************************************/

/**
 * Provides common math related functions.
 * @author niall mcguinness
 * @version 1.0
 * @class GDMath
 */
class GDMath {
  /**
   * Returns degrees value in radians
   *
   * @static
   * @param {Number} degrees Degrees value
   * @returns {Number} Radians value
   * @memberof GDMath
   */
  static ToRadians(degrees) {
    degrees %= 360;
    return degrees * (Math.PI / 180);
  }

  /**
   * Returns radians value in degrees
   *
   * @static
   * @param {Number} radians Radians value
   * @returns {Number} Degrees value
   * @memberof GDMath
   */
  static ToDegrees(radians) {
    return Math.fround(radians * (180 / Math.PI));
  }

  /**
   * Converts a floating-point value to a fixed based precision in a specified base (e.g. 8, 16, 10)
   *
   * @static
   * @param {Number} value Floating-point value to be converted
   * @param {Number} precision Integer precision (e.g. 0, 1, 2)
   * @param {Number} base Number base (e.g. 8,16,10)
   * @returns
   * @memberof GDMath
   */
  static ToFixed(value, precision, base) {
    if (value == 0) return 0;

    let pow = Math.pow(base || 10, precision);
    return Math.round(value * pow) / pow;
  }
}

/************************************************************************/
//to do...
class GDString {

/**
 * Returns a string with the leading/trailing whitespace removed and converted to lowercase
 *
 * @static
 * @param {string} str User-defined string
 * @returns Converted string
 * @throws Exception if null, undefined or not a String
 * @memberof GDString
 */
static TrimToLower(str) {
    //if invalid then throw exception
    if (this.IsValidString(str)) throw "Variable does not hold a valid string!";

    return str.trim().toLowerCase();
  }

  /**
 * Returns true if a valid string, otherwise false
 *
 * @static
 * @param {string} str User-defined string
 * @returns True if valid, otherwise false
 * @throws Exception if null, undefined or not a String
 * @memberof GDString
 */
  static IsValidString(str) {
    return str == null && str == undefined && new String(str) instanceof String;
  }
}

/**
 * Provides methods to manipulate the DOM
 *
 * @class HTMLDom
 */
class HTMLDom {
  /**
   * Sets text and shows a toast for a period of time in ms
   *
   * @static
   * @param {String} elementID  Valid div element ID
   * @param {String} text Text to set the innerHTML contents of the element to
   * @param {Number} durationInMs Time in ms to show the element
   * @memberof GDUtilities
   */
  static RevealToast(elementID, text, durationInMs) {
    let element = document.getElementById(elementID);
    element.innerHTML = text;
    element.style.display = "block";

    setTimeout(function (e) {
      element.style.display = "none";
    }, durationInMs);
  }

  /**
   * Hides a toast element
   *
   * @static
   * @param {String} elementID Valid div element ID
   * @memberof GDUtilities
   */
  static HideToast(elementID) {
    let element = document.getElementById(elementID);
    element.style.display = "none";
  }
}
