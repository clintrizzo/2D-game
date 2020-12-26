var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;

//code for the ball
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

//paddle variables
var paddleHeight = 10;
var paddleWidth = 70;
var paddleX = (canvas.width - paddleWidth) / 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#grey";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if (y + dy > canvas.height || y + dy < 0) { //ball to bounce off the top and the bottom of the edges
        dy = -dy;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy
    }
}


setInterval(draw, 10);