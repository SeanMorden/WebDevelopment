/*
			Student:Sean Morden
			Student#:300490950
			Assignment 5
			Filename: index.html
*/
// Create the canvas
var gameBg = document.getElementById("thisCanvas");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
gameBg.appendChild(canvas);


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "background.jpg";

// Tardis img
var tardisReady = false;
var tardisImage = new Image();
tardisImage.onload = function () {
	tardisReady = true;
};
tardisImage.src = "tardis1.png";


// Game objects
var tardis = {
	x: 0,
	y: 0
};
var tardisCaught = 0;
var interval = 2000;

//Makes tardis move by itself
var moveTardis = setInterval(reset, interval); 

// Move the tardis when the player catches a tardis
var reset=function() {
	// Throw the tardis somewhere on the screen randomly
	tardis.x = 30 + (Math.random() * (canvas.width - 60));
	tardis.y = 30 + (Math.random() * (canvas.height - 60));

};

//Captures click on tardis
function windowToCanvas(x, y) {
    var r = canvas.getBoundingClientRect();
    return { x: x - r.left * (canvas.width  / r.width),
             y: y - r.top  * (canvas.height / r.height)};
};

canvas.onmousedown = function (e) {
    var loc = windowToCanvas(e.clientX, e.clientY);
    if (
		loc.x <= (tardis.x + 60)
		&& tardis.x <= (loc.x)
		&& loc.y <= (tardis.y + 60)
		&& tardis.y <= (loc.y)
	) {
		clearInterval(moveTardis);
    	interval *= 0.95;
    	moveTardis = setInterval(reset, interval);
    	tardisCaught++;
		reset();
		
    }
};

//function to reset counter
var resetScore=function() {
	tardisCaught = 0;
};

//function to reset speed
var resetSpeed=function() {
	interval = 1500;
	clearInterval(moveTardis);
	moveTardis = setInterval(reset, interval);
};



// Draw everything
 function render() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (tardisReady) {
		ctx.drawImage(tardisImage, tardis.x, tardis.y);
	}

	// Score in image
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "10px 'Press Start 2P', cursive";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("You've caught the Tardis: " + tardisCaught+" times", 30, 30);
};

// The main game loop
function main() {
	var now = Date.now();
	var delta = now - then;
	render();
	then = now;
	
	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Event listeners for the buttons
var buttonScore = document.getElementById("scoreButton");
var buttonSpeed = document.getElementById("speedButton");

buttonScore.addEventListener("click", resetScore, false);
buttonSpeed.addEventListener("click", resetSpeed, false);


// Get this game GOING!
var then = Date.now();
reset();
moveTardis = setInterval(reset, interval);
main();