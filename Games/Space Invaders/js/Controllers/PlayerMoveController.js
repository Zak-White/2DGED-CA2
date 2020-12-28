class PlayerMoveController{

    constructor(){

    }

    Update(gameTime, parent){

        parent.transform2D.TranslateBy(new Vector2(0, -1));
    }
}