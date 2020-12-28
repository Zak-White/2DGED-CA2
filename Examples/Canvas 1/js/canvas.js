//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var a1 = new Arc(320, 240, 50, toRadians(45), toRadians(270));
a1.draw(ctx, 5, "green", "red", true);


function toRadians(degrees) {
    if (degrees == undefined || degrees == null || typeof (degrees) != "number" || isNaN(degrees))
        throw "degrees value provided is invalid!";
    return degrees * Math.PI / 180;
}



var r1 = new Rect(new Vector2(50, 50), new Vector2(100, 50));
r1.draw(ctx, 2, "red");

var r2 = new Rect(new Vector2(200, 50), new Vector2(60, 50));
r2.draw(ctx, 2, "yellow");

var r3 = r1.clone();
r3.Position.x = 350;
r3.draw(ctx, 1, "green");



















/******************************************************/
/*
ctx.beginPath();
//face
ctx.arc(320, 240, 80, 0, Math.PI * 2);
//left eye
ctx.moveTo(290, 200);
ctx.arc(280, 200, 10, 0, Math.PI * 2);
//right eye
ctx.moveTo(370, 200);
ctx.arc(360, 200, 10, 0, Math.PI * 2);
//smile
ctx.moveTo(380, 240);
ctx.arc(320, 240, 60, 0, Math.PI);
ctx.stroke();
ctx.closePath();
*/
/******************************************************/

/*
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.fillStyle = "yellow";
ctx.arc(500, 240, 40, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//left eye
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "white";
ctx.arc(480, 230, 5, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//right eye
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "white";
ctx.arc(520, 230, 5, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//line smile
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.arc(500, 245, 25, toRadians(20), toRadians(170));
ctx.closePath();
ctx.stroke();
ctx.fill();

//draw outer rectangle
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(80, 200, 100, 80);

//draw inner rectangle
ctx.fillStyle = "black";
ctx.fillRect(100, 220, 60, 40);
//clear color?
ctx.clearRect(80, 160, 60, 60);



function toRadians(degrees){  
    if(degrees == undefined || degrees == null || typeof(degrees) != "number" || isNaN(degrees))
            throw "degrees value provided is invalid!";
    return degrees * Math.PI/180;
}
*/


/*
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(250, 100);
ctx.lineWidth = 2;
ctx.strokeStyle = "#00ff00";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 200);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ff0000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 240, 30, -Math.PI/2, -Math.PI, true);
ctx.lineWidth = 5;
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "#0000ff"; //"blue"
ctx.stroke();
ctx.fill();
ctx.closePath();
*/