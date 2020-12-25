var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//testing the design inside the context box
//ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0,0, 255, 0.5)"; // stroke style is to fill the outer boxes like border in css
// ctx.stroke();
// ctx.closePath();

ctx.beginPath();
ctx.rect(10, 2, 84, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(104, 2, 84, 20);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(198, 2, 84, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(292, 2, 84, 20);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(386, 2, 84, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();


//code for the ball
var x = canvas.width / 2;
var y = canvas.height - 30;

function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);