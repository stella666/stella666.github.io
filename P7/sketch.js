function setup() {
  createCanvas(400,500);
}

function draw() {
  background(168,211,255);
  k1za(mouseX, mouseY);
}

// Teiknar geimveruna zoog
function k1za(x,y){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(127);
  ellipse(200, 230, 70, 100);
  // Teiknum hausinn
  fill(127);
  ellipse(200,160, 50,50);
  // Teiknum augun
  fill(0);
  ellipse (190,155, 10,15);
  ellipse (210,155, 10,15);
  // Teiknum eyrun
  fill(127)
  triangle(177, 150, 180, 120, 190, 140);
  triangle(210, 140, 221, 120, 222, 150);
  // Teiknum nefið
  fill(255,174,201)
  triangle(195, 165, 199, 173, 204, 165);
}
