var allMyBubbles = [];
var numofBubbles = 50;
var sizeofBubbles = 75;

function setup() {
	createCanvas(600, 400);
	for(i=0; i<numofBubbles; i++){
		allMyBubbles[i] = new Bubble(random(0,600),random(0, 400));
	}
}


function draw() {
	background(0);
	for (var i = 0; i < allMyBubbles.length; i++) {
	allMyBubbles[i].display();
	allMyBubbles[i].move();0
	}
}

function Bubble(x, y) {
	this.x = x;
	this.y = y;
	fill(255, 0, 50, 80);
	this.display = function() {
    	stroke(255);
		ellipse(this.x, this.y, sizeofBubbles, sizeofBubbles);
	}
	this.move = function() {
		this.x = this.x + random(-1, 1);
		this.x = this.x + random(-1, 1);
	}
}