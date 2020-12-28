class Weapon extends Sprite{
    clipSize;
    damageRate;
    clipCount;

    constructor(name, texture, clipSize, damageRate, clipCount){
        super(name, texture);
        this.clipSize = clipSize;
        this.damageRate = damageRate;
        this.clipCount = clipCount;
    }

    Equals(other){
        return super.Equals(other)
        && this.clipSize === other.clipSize;
    }

    Clone(){

        //value type is passed by copy (char, byte, bool, int, float, short, long, double) - deep
        //reference type is passed by address (array, object, user-defined classes) - shallow
        return new Weapon(
            this.Name,           //deep
            this.Texture,        //deep
            this.clipSize,       //deep
            this.damageRate,     //deep
            this.clipCount);     //deep
    }
}