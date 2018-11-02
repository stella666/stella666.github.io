

function setup() {
  createCanvas(600,600);
  colorMode(RGB);
  background(141,220,224);
  frameRate(5);
  noStroke();
  fill(240,3,3)
  rect(280,185, 60, 85);
  rect(340,225, 90, 45);
  fill(0)
  ellipse(310,275, 50,50);
  ellipse(370,280, 35,35);
  ellipse(410,280, 35,35);
  stroke(255,201,14)
  strokeWeight(4);
  line(310,280,410,280)
}

function draw() {
  stroke(0)
  strokeWeight(1)
  for(var x = 0; x < width; x = x+10){
    fill(random(50,150));
    rect(x,width/2, 10,10);
  }
}
