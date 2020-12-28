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

    normalize(){
        var length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

        if(length != 0){
            this.x /= length;
            this.y /= length;
        }
    }

    //0.8923234, 2 => 0.89
    round(precision){

        if(precision == 0){
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
        }
        else{
            var multiplier = Math.pow(10, precision);
            this.x = Math.floor(this.x * Math.pow(10, precision))/multiplier;
            this.y = Math.floor(this.y * Math.pow(10, precision))/multiplier;
        }

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