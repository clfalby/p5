//The setup function only happens once
var y=1//defined variables
var x=0
var z=5
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(155,200,15); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(255,255,111,160); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  x= x+z;//rgb color for the circle
  y= y+z;
  square(width/2,height/2,30,30); // center of canvas, 20px dia
   dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
}

