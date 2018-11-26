var k1za1, k1za2, k1za3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá k1za hluti.
  k1za1 = new k1za(200,400,80,60,10);
  k1za2 = new k1za(300,300,60,40,7);
  k1za3 = new k1za(400,300,90,70,10);
}


  function draw() {
	  background(55,55,55);
  fill(255,255,128);
  noStroke();
	 ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  k1za1.move();
  k1za1.show();
  k1za1.blink();
  k1za2.move();
  k1za2.show();
  k1za2.blink();
  k1za3.move();
  k1za3.show();
  k1za3.blink();
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
