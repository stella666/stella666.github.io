var eyeSize = 20;
var pupilSize = 10;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var faceR = 50;
var faceG = 50;
var faceB = 50;
var mouthWidth = 20;
var mouthHeight = 20;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(255,201,14);
  fill(faceR,faceG,faceB)
  ellipse(x, y, faceWidth, faceHeight);
  fill(255,255,255)
  ellipse(x-20, y-20, eyeSize)
  ellipse(x+20, y-20, eyeSize)
  fill(0,0,0)
  ellipse(x-20, y-20, pupilSize)
  ellipse(x+20, y-20, pupilSize)
  rect(x-15, y, mouthWidth, mouthHeight, 20);
  line(150, 20, x, y-faceHeight/2);

  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize = random(10,30);
  pupilSize = random(5,20);
  faceR = random(50,250);
  faceG = random(50,250);
  faceB = random(50,250);
  mouthWidth = random(10,50);
  mouthHeight =random(10,50);
}
