
var k1zur = [];

function setup() {
  createCanvas(600, 600);
  // Búum til hundrað k1za hluti.
  for (var i = 0; i < 100; i = i+1){
    k1zur[i] = new k1za(random(200,400),random(300,400),random(60,90),random(40,70),random(7,10));
  }
}

function draw() {
	background(55,55,55);
  fill(255,255,128);
	ellipse(300,300,500,500);
  // Teiknum og hreyfum allar k1zurnar okkar
  for (var i = 0; i < k1zur.length; i = i+1){
  	k1zur[i].move();
  	k1zur[i].show();
    k1zur[i].blink();
  }
}

function mousePressed(){
  for (var i = k1zur.length-1; i >= 0; i = i-1){
    if(fjarl(k1zur[i].x,k1zur[i].y,mouseX,mouseY) < 50){
		    k1zur.splice(i,1);
	  }
  }
}

// Klasinn k1za
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// headColor: er liturinn á augunum hans
class k1za{
constructor(x,y,bukur,haus,augu) {
  this.x = x;
  this.y = y;
  this.bukur = bukur;
  this.haus = haus;
  this.augu = augu
  this.dir = random(0,2*PI);
  this.speed = random(0,5);
  this.headColor = color(127,127,127);
}

show(){
  rectMode(CENTER);
  strokeWeight(1);
  stroke(0);
// Teiknar k1za

  // Teiknum búkinn
  fill(127);
  ellipse(this.x, this.y, 70, this.bukur*2);
  // Teiknum hausinn
  fill(this.headColor);
  ellipse(this.x,this.y-this.bukur, this.haus,this.haus);
  // Teiknum augun
  fill(0);
  ellipse (this.x-10,this.y-this.bukur, this.augu,this.augu);
  ellipse (this.x+10,this.y-this.bukur, this.augu,this.augu);
  // Teiknum eyrun
  fill(127)
  triangle(this.x-this.haus/2*cos(PI/4), this.y-this.bukur-this.haus/2*sin(PI/4), this.x-this.haus/2*cos(0.4*PI), this.y-this.bukur-this.haus/2*sin(0.4*PI), this.x-this.haus/2*cos(PI/4), this.y-this.bukur-this.haus/2*sin(PI/4)-20);
  triangle(this.x+this.haus/2*cos(PI/4), this.y-this.bukur-this.haus/2*sin(PI/4), this.x+this.haus/2*cos(0.4*PI), this.y-this.bukur-this.haus/2*sin(0.4*PI), this.x+this.haus/2*cos(PI/4), this.y-this.bukur-this.haus/2*sin(PI/4)-20);
  // Teiknum nefið
  fill(255,174,201)
  triangle(this.x-5, this.y-this.bukur+5, this.x-1, this.y-this.bukur+13, this.x+4, this.y-this.bukur+5);
}
// hreyfir k1za um skjáinn
move(){
  this.x = this.x + this.speed;
  this.y = this.y + this.speed;
  // athuga hvort k1za snerti veggi
  if ((this.x > width) || (this.x < 0) || (this.y > height) || (this.y < 0)){
    this.speed = this.speed * -1;
  }
  }
  // Velur slembinn lit fyrir hausinn á k1za.
  blink(){
    if((this.x > width-100) || (this.x < 100) || (this.y > height-100) || (this.y < 100))
    this.headColor = color(random(255), random(255), random(255));
    }
  }

  function fjarl(x1,y1,x2,y2){
    var dist = sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    return dist;
  }
