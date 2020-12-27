var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 8;

//code for the ball
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 4;
var dy = -2;

//paddle variables
var paddleHeight = 5;
var paddleWidth = 85;
var paddleX = (canvas.width - paddleWidth) / 2;

//controls
var rightPressed = false;
var leftPressed = false;

//brick functions
var brickRowCount = 3;
var brickColumnCount = 7;
var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 13;
var brickOffsetTop = 30;
var brickOffsetLeft = 25;

//counting the score
var score = 0;

//setting the lives for the game
var lives = 3;

//bricks code
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


//event listener to move the paddle
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

//code for the collision from the ball to the bricks
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++; // having the score increase once each brick is hit
                    if (score == brickRowCount * brickColumnCount) { //game will end once all bricks are destroyed
                        alert("You Win, Congratulations!");
                        //reloading the game once the user destroys all of the bricks
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }
}

//design for the score on the top left corner
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score" + score, 25, 20);
}

//design for the lives on the top right corner
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: " + lives, canvas.width - 95, 20);
}

//drawing the ball / design of the ball 
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); //enables the ball to move two spaces per ms so it doesnt leave a trail
    ctx.fillStyle = "#c4c7ce";
    ctx.fill();
    ctx.closePath();
}

//design for the bottom paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#c4c7ce";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    //detailing how the bricks are to be set up per row and column
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath(); //design of the bricks
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#blue";
                ctx.fill();
                ctx.closePath();
            }

        }
    }
}

//complete code calling the functions of the designed segments above
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    drawScore();
    drawLives();
    //getting the game to end when hitting the bottom of the board
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            lives--;
            if (!lives) {
                alert("GAME OVER");
                document.location.reload();
            } else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    //declaring the speed of the paddle
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 10;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 10;
    }

    x += dx;
    y += dy;
}

//reseting the game if user wins
var interval = setInterval(draw, 10);