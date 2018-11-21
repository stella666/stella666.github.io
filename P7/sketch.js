var augu1= 5
var haus1= 40
var bukur1= 50
function setup() {
  createCanvas(400,500);
}


function draw() {
  background(168,211,255);
  k1za(mouseX, mouseY,bukur1,haus1,augu1);
  k1za(300,300, 90,70,10)
  k1za(100,300,80,60,10)
  k1za(200,300,60,40,7)

}

// Teiknar k1za
function k1za(x,y,bukur,haus,augu){
  rectMode(CENTER);
  // Teiknum búkinn
  fill(127);
  ellipse(x, y, 70, bukur*2);
  // Teiknum hausinn
  fill(127);
  ellipse(x,y-bukur, haus,haus);
  // Teiknum augun
  fill(0);
  ellipse (x-10,y-bukur, augu,augu);
  ellipse (x+10,y-bukur, augu,augu);
  // Teiknum eyrun
  fill(127)
  triangle(x-haus/2*cos(PI/4), y-bukur-haus/2*sin(PI/4), x-haus/2*cos(0.4*PI), y-bukur-haus/2*sin(0.4*PI), x-haus/2*cos(PI/4), y-bukur-haus/2*sin(PI/4)-20);
  triangle(x+haus/2*cos(PI/4), y-bukur-haus/2*sin(PI/4), x+haus/2*cos(0.4*PI), y-bukur-haus/2*sin(0.4*PI), x+haus/2*cos(PI/4), y-bukur-haus/2*sin(PI/4)-20);
  // Teiknum nefið
  fill(255,174,201)
  triangle(x-5, y-bukur+5, x-1, y-bukur+13, x+4, y-bukur+5);
}
  function mousePressed(){
    augu1 = augu1+2
    haus1 = haus1+5
    bukur1 = bukur1+10
  }
