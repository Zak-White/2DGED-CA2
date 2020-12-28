window.addEventListener("load", loadGame);

var keysDown = {}; //new Array();

window.addEventListener("keydown", function (evt) {
    //  console.log(evt.key);
    keysDown[evt.key] = true;
});

window.addEventListener("keyup", function (evt) {
    // console.log(evt.key);
    delete keysDown[evt.key];
});

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables
var pongBall, paddleLeft, paddleRight;
var ballSpeed = 5;
var hitColorA = "yellow",
    hitColorB = "green";
var hitColor = hitColorA;
var paddleMoveSpeed = 15;

let height = 80;
let width = 10;
let margin = 25;

function demos() {
    /** DEMO **/
    try {
        var x = GDUtilities.getRandomInRangeExcl(1, 10, [2, 3, 4]);
    } catch (err) {
        console.log(err);
    }
}

function loadGame() {

    //demos();

    //add game primitive
    initializeGame();

    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function initializeControls() {
    paddleLeft = new Rect(new Vector2(margin, (cvs.clientHeight - height) / 2),
        new Vector2(width, height));

    paddleRight = new Rect(new Vector2(cvs.clientWidth - margin - width,
            (cvs.clientHeight - height) / 2),
        new Vector2(width, height));
}

function initializeBall() {
    pongBall = new Arc(320, 240, 20, 0, Math.PI * 2);
    var randomX = GDUtilities.getRandomInRangeExcl(-2, 2, [0]);
    var randomY = GDUtilities.getRandomInRange(-2, 2);
    ballVector = new Vector2(randomX, randomY);
    ballVector.normalize();
}

function initializeGame() {
    initializeControls();
    initializeBall();
}

function animate() {
    update();
    draw();
    window.requestAnimationFrame(animate);
}

function update() {
    checkCollisions();
    updateBall();
    updatePaddles();
    updateScore();
}

function checkCollisions() {

    //paddle collision with world 
    checkBallToWorldCollision();
    checkBallToPaddleCollision();
}

/**
 * World extends collision with ball
 */
function checkBallToWorldCollision() {
    if (this.pongBall.x >= cvs.clientWidth - this.pongBall.radius) {
        this.ballVector.x *= -1;
        hitColor = hitColorA;
    } else if (this.pongBall.x <= this.pongBall.radius) {
        this.ballVector.x *= -1;
        hitColor = hitColorB;
    }

    if (this.pongBall.y >= cvs.clientHeight - this.pongBall.radius)
        this.ballVector.y *= -1;
    else if (this.pongBall.y <= this.pongBall.radius)
        this.ballVector.y *= -1;
}
/**
 * Paddle collision with ball
 */
function checkBallToPaddleCollision() {

    var projectedBallPosition = new Vector2(this.pongBall.x, this.pongBall.y);
    //new Vector2(this.ballVector.x + this.pongBall.x,
   //     this.ballVector.y + this.pongBall.y);

    //left paddle
    if(projectedBallPosition.y >= this.paddleLeft.position.y && 
        projectedBallPosition.y <= this.paddleLeft.position.y + this.paddleLeft.dimension.y){
           
            if(projectedBallPosition.x == this.paddleLeft.position.x + this.paddleLeft.dimension.x + 
                this.pongBall.radius){
                    this.ballVector.x *= -1;
                }
        }

    //right paddle
    if(projectedBallPosition.y >= this.paddleRight.position.y && 
        projectedBallPosition.y <= this.paddleRight.position.y + this.paddleRight.dimension.y){
           
            if(projectedBallPosition.x == this.paddleRight.position.x - this.pongBall.radius){
                    this.ballVector.x *= -1;
                }
        }


    //check for ball CD/CR against the left paddle
    //remember that CD/CR is projected/predictive

    //if we detect a CD then we reverse the ballVector.x
}


function updateBall() {
    this.pongBall.x += ballSpeed * ballVector.x;
    this.pongBall.y += ballSpeed * ballVector.y;
}

function updatePaddles() {
    var paddleLeftMove = 0,
        paddleRightMove = 0;
    for (var key in this.keysDown) {
        if (key == "w") {
            paddleLeftMove = -paddleMoveSpeed;
        } else if (key == "s") {
            paddleLeftMove = paddleMoveSpeed;
        }

        //right paddle
        if (key == "o") {
            paddleRightMove = -paddleMoveSpeed;
        } else if (key == "l") {
            paddleRightMove = paddleMoveSpeed;
        }

        //vertical bounds check on left paddle
        if (paddleLeftMove + this.paddleLeft.position.y > 20 &&
            paddleLeftMove + this.paddleLeft.position.y < 460 - this.paddleLeft.dimension.y) {
            this.paddleLeft.move(0, paddleLeftMove);
        }

        //vertical bounds check on left paddle
        if (paddleRightMove + this.paddleRight.position.y > 20 &&
            paddleRightMove + this.paddleRight.position.y < 460 - this.paddleRight.dimension.y) {
            this.paddleRight.move(0, paddleRightMove);
        }
    }
}

function updateScore() {

}

function draw() {
    clearCanvas("rgb(255, 255, 241)");
    pongBall.draw(ctx, 2, "red", hitColor, false);
    paddleLeft.draw(ctx, 2, "blue");
    paddleRight.draw(ctx, 2, "orange");
}

function clearCanvas(color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
