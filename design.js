var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//testing the design inside the context box
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();