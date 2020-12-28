
class PlayerController {

    constructor(moveSpeed=0.4) {
        this.moveSpeed = moveSpeed;
    }
  
    Execute(gameTime, parent) {
  
        //animation?
        //100HZ, 200HZ, 60HZ - gameTime.ElapsedGameTime //1000ms/60Hz = 16ms
    
        if(keyboardManager.IsKeyDown(Keys.Q)){
            var moveVector = Vector2.MultiplyScalar(new Vector2(-this.moveSpeed, 0), gameTime.ElapsedTimeInMs);
            parent.Transform2D.TranslateBy(moveVector);

            if(parent.Artist){
                parent.Artist.SetTake("run_left");
            }

         //   soundManager.Play("gunshot");

        }
        else if(keyboardManager.IsKeyDown(Keys.E)){
            parent.Transform2D.TranslateBy(Vector2.MultiplyScalar(new Vector2(this.moveSpeed, 0), gameTime.ElapsedTimeInMs));

            if(parent.Artist){
                parent.Artist.SetTake("run_right");
            }
        }
    }
  }