var augu1= 5
var haus1= 50
var bukur1= 70
function setup() {
  createCanvas(400,500);
}


function draw() {
  background(168,211,255);
  k1za(mouseX, mouseY,bukur1);
  k1za(100,120,bukur1)
  k1za(300,300,bukur1)
  k1za(200,230,bukur1)

}

// Teiknar k1za
function k1za(x,y,bukur){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(127);
  ellipse(x, y, bukur1, 100);
  // Teiknum hausinn
  fill(127);
  ellipse(x,y-bukur, haus1,haus1);
  // Teiknum augun
  fill(0);
  ellipse (x-10,y-bukur, augu1,augu1);
  ellipse (x+10,y-bukur, augu1,augu1);
  // Teiknum eyrun
  fill(127)
  triangle(x-23, y-80, x-20, y-110, x-10, y-90);
  triangle(x+10, y-90, x+21, y-110, x+22, y-80);
  // Teiknum nefið
  fill(255,174,201)
  triangle(x-5, y-65, x-1, y-57, x+4, y-65);
}
  function mousePressed(){
    augu1 = augu1+2
    haus1 = haus1+5
    bukur1 = bukur1+10
  }
