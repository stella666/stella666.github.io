function setup() {
  createCanvas(700,700);
  background(251,132,0);
  fill(125,125,255);
}

function draw(){
  if(mouseX < 175){
    fill(125,125,255);
    ellipse(mouseX, mouseY, 50, 50);
  }
    if(mouseX < 350 && mouseX>180){
      fill(132,224,255)
      ellipse(mouseX, mouseY, 35, 35);
}
if(mouseX < 525 && mouseX>350){
  fill(89,89,255)
  ellipse(mouseX, mouseY, 20, 20);
}
if(mouseX < 700 && mouseX>525){
  fill(193,63,237)
  ellipse(mouseX, mouseY, 5, 5);
}
}
