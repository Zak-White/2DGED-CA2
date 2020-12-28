class ArcElement{
    constructor(id, actorType,context, x, y, radius, startAngle, endAngle){
        this.context = context;
    }

    Draw(){
        this.context.save();
        context.beginPath();
        context.arc(400, 400, 50, 0, 2 * Math.PI);
        context.stroke();
        this.context.restore();
    }

    Clone(){
        return new ArcElement();
    }
}

class RectElement{
    constructor(id, actorType,context, x, y, w, h){
        this.context = context;
    }

    Draw(){
        this.context.save();
        ctx.strokeRect(200, 200, 150, 100);
        this.context.restore();
    }

    Clone(){
        return new ArcElement();
    }
}


var sE = new SpriteElement("my car", actorType.Vehicle)

class SpriteElement{
    constructor(id, actorType, context, spriteSheet, sx, sy, swidth, sheight, x, y, w, h){
        this.context = context;
    }

    Update(){
        this.x += 1;
    }
    Draw(){
        if(this.isDrawn){
            this.context.save();
            context.drawImage(spriteSheet, 140, 30, 62, 52, this.x, this.y, 100, 200);
            this.context.restore();
        }
    }

    Clone(){
        return new ArcElement();
    }
}