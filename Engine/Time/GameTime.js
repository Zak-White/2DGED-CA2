/**
 * Provides the total elapsed game time and the time since the last update()
 *
 * @author niall mcguinness
 * @version 1.0
 * @class GameTime
 */
class GameTime {

  //#region Fields
  //#endregion
 
  //#region Properties
  get TotalElapsedTimeInMs() {
    return Math.ceil(this.totalElapsedTimeInMs);
  }
  get ElapsedTimeInMs() {
    return Math.ceil(this.elapsedTimeInMs);
  }
  get ElapsedTimeInSecs() {
    return Math.ceil(this.elapsedTimeInMs) / 1000;
  }
  //#endregion

  //#region Constructors and Core methods
  constructor() {
    this.totalElapsedTimeInMs = 0;
    this.elapsedTimeInMs = 0;

    this.startTimeInMs = 0;
    this.lastAnimationFrameTimeInMs = 0;
  }

  //now = current system time in MS
  Update(now) {
    if (!this.startTimeInMs) this.startTimeInMs = now;

    this.totalElapsedTimeInMs = now - this.startTimeInMs;
    this.elapsedTimeInMs = now - this.lastAnimationFrameTimeInMs;
    this.lastAnimationFrameTimeInMs = now;
  }
  //#endregion
}
