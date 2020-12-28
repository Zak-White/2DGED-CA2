class PatrolController {
  /**
   *Creates an instance of PatrolController.
   * @param {Vector2} moveVector Direction and distance of...
   * @param {Number} maxDistance
   * @param {Number} numberOfBullets
   * @param {Number} fireRateInMS
   * @param {Number} triggerDistance
   * @memberof PatrolController
   */
  constructor(
    moveVector,
    maxDistance,
    numberOfBullets,
    fireRateInMS,
    triggerDistance
  ) {
    this.moveVector = moveVector;
    this.maxDistance = maxDistance;
    this.startTranslation = new Vector2(0, 0);
    this.bFirst = true;
    this.currentDistance = 0;
    this.currentDirection = 1;
    this.numberOfBullets = numberOfBullets;
    this.bActivePatrol = true;
    this.fireRateInMS = fireRateInMS;
    this.triggerDistance = triggerDistance;
  }

  Execute(gameTime, parent) {
    if (this.bFirst) {
      this.startTranslation = parent.Transform2D.Translation;
      this.bFirst = false;
    }

    if (this.bActivePatrol) {
      var moveVector = Vector2.MultiplyScalar(
        this.moveVector,
        this.currentDirection
      );
      parent.Transform2D.TranslateBy(moveVector);

      this.currentDistance += this.currentDirection * this.moveVector.Length();
      if (Math.abs(this.currentDistance) > this.maxDistance)
        this.currentDirection *= -1;

      if (this.currentDirection > 0) {
        if (parent.Artist) {
          parent.Artist.SetTake("run_right");
        }
      } else {
        if (parent.Artist) {
          parent.Artist.SetTake("run_left");
        }
      }
    }

    var x = objectManager.Find(
      ActorType.Player,
      (sprite) => sprite.ID === "player1"
    );
    var enemyTranslation = x.Transform2D.Translation;

    if (this.numberOfBullets > 0) {
      if (
        Vector2.Distance(parent.Transform2D.Translation, enemyTranslation) <
        this.triggerDistance
      ) {
        //to do...pause patrol

        this.timeSinceLastBullet += game.ElapsedTimeInMs;

        if (this.timeSinceLastBullet >= fireRateInMS) {
          //instanciate a sprite

          //add a controller to move the bullet

          //add to the object manager
          objectManager.Add(bulletSprite);
            

          this.timeSinceLastBullet = 0;
          this.numberOfBullets--;
        }
        this.bActivePatrol = false;
      } else {
        this.bActivePatrol = true;
      }
    }
  }
}
