/**
 * Primitive to support drawing rectangles
 */
class Rect {

    get Position(){
        return this.position;
    }
    set Position(value){
        this.position = value;
    }
    get Dimension(){
        return this.dimension;
    }
    set Dimension(value){
        this.dimension = value;
    }
    constructor(position, dimension) {
        this.position = position;
        this.dimension = dimension;
    }
    /**
     * Method to render the rect to the canvas referenced by the context, ctx
     *
     * @param {*} ctx
     * @param {*} lineWidth
     * @param {*} strokeStyle
     * @memberof Rect
     */
    draw(ctx, lineWidth, strokeStyle) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(this.position.X, this.position.Y, 
            this.dimension.X, this.dimension.Y);
    }

    /**
     * Provides a copy of the current object
     *
     * @returns Rect object (deep-copy)
     * @memberof Rect
     */
    clone() {
        //deep-copy
        return new Rect(this.position, this.dimension);
    }

    //to do...add equals
    equals(other){
        if(other == null || other == undefined || 
            other.constructor.name != this.constructor.name)
            return false;

        return this.position.equals(other.position) && this.dimension.equals(other.dimension);
    }
}