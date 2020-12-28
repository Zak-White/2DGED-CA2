/**
 * Represents a pair of numeric values
 */
class Vector2{

    get X(){
        return this.x;
    }
    set X(value){
        this.x = value >= 0 ? value : 0; 
    }

    get Y(){
        return this.y;
    }
    set Y(value){
        this.y = value >= 0 ? value : 0; 
    }

    constructor(x, y){
        this.X = x;
        this.Y = y;
    }

    /**
     * Returns a deep-copy of a Vector2 object
     */
    clone(){
        return new Vector2(this.x, this.y);
    }

    equals(other){
        if(other == null || other == undefined || 
            other.constructor.name != this.constructor.name)
            return false;

        return this.x == other.x && this.y == other.y;
    }
}