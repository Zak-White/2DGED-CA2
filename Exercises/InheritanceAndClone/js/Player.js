class Player extends Sprite{

    inventory; //new Array();

    constructor(name, texture){
        super(name, texture);
        this.inventory = [];
    }

    AddWeapon(weapon){
       // if(this.inventory != null && this.inventory != "undefined")
        this.inventory.push(weapon);

        //sort here???
    }

    GetWeapon(index){
        if(index >= 0 && index < this.inventory.length)
            return this.inventory[index];
        else
            throw "GetWeapon - Invalid index";
    }


    Equals(other){

        if(this.inventory.length != other.inventory.length)
            return false;

         var bEquals = super.Equals(other);

         //sort both weapon arrays here
         
         for(let i = 0; i < this.inventory.length; i++){
             let thisWeapon = this.GetWeapon(i);
             let otherWeapon = other.GetWeapon(i);
                if(!thisWeapon.Equals(otherWeapon))
                    return false;            
         }

         return bEquals;
    }

    Clone(){

        //value type is passed by copy (char, byte, bool, int, float, short, long, double) - deep
        //reference type is passed by address (array, object, user-defined classes) - shallow
        
        var playerClone = new Player(this.name, this.texture);

        for(let i = 0; i < this.inventory.length; i++){
            let weapon = this.inventory[i];
            playerClone.AddWeapon(weapon.Clone());
        }

        return playerClone;
    }
}