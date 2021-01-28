var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];
let Can;

/////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
    let parentElement=document.getElementById("Can_sketch");
    const percisions=getComputedStyle(parentElement);
    const w=parseInt(percisions.width);
    Can=createCanvas(w, w/1.5);
    Can.parent(parentElement)
    Can.background("#FDFBEE");
	noStroke();
	fill(64, 255, 255, 192);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
	Can.background("#FDFBEE");

	stroke(0);
	noFill();
	ellipse(width/2,height/2,width/2,width/2);
	
	noStroke();
	fill(64, 255, 255, 192);
	for (var particleA = 0; particleA < mass.length; particleA++) {
		var accelerationX = 0, accelerationY = 0;
		
		for (var particleB = 0; particleB < mass.length; particleB++) {
			if (particleA != particleB) {
				var distanceX = positionX[particleB] - positionX[particleA];
				var distanceY = positionY[particleB] - positionY[particleA];

				var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
				if (distance < 1) distance = 1;

				var force = (distance - 320) * mass[particleB] / distance;
				accelerationX += force * distanceX;
				accelerationY += force * distanceY;
			}
		}
		
		velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
		velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
	}
	
	for (var particle = 0; particle < mass.length; particle++) {
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		
		ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewParticle() {
	mass.push(random(0.003, 0.03));
	positionX.push(mouseX);
	positionY.push(mouseY);
	velocityX.push(0);
	velocityY.push(0);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}