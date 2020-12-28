
class Sprite{
    name;
    texture;

    get Name(){
        return this.name;
    }

    get Texture(){
        return this.texture;
    }

    constructor(name, texture){
        this.name = name;
        this.texture = texture;
    }

    Equals(other){
        return this.name === other.name
            && this.texture === other.texture;
    }

    Clone(){

        //value type is passed by copy (char, byte, bool, int, float, short, long, double) - deep
        //reference type is passed by address (array, object, user-defined classes) - shallow
        return new Sprite(
            this.name,   //deep
            this.texture); //deep
    }
}