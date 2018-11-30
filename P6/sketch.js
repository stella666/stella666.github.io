var x = 100;
var y = 100;
var hradiX = 2;
var hradiY = 8;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var kassi = 1;
var kassiBreidd = 60;
var kassiLengd = 40;
var kassiX = 100;
var kassiY = 100;
var kassiHorn = 20;
var kassar = []

function setup() {
	createCanvas(700,700);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
  for (var i = 0; i<6; i++){
  kassar[i]=new kassiTeikna(100+70*i,100)
  }
}

function draw() {
  background(149,181,255);
	// Reikna ný hnit út frá hraða boltans:
  x = x + hradiX;
  y = y + hradiY;
	// Athuga hvort boltinn snertir veggi:
  if ((x > width-boltiStaerd/2) || (x < boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  if ((y > height-boltiStaerd/2) || (y < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
	// Athuga hvort bolti snertir spaða:
	// abs() táknar algildi/tölugildi
	if(abs(spadiY - y) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - x) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
		stig = stig + 1;
    hradiX = -(mouseX - x)/10
	}
  for (var i = 0; i < kassar.length; i++){
    kassar [i].show();
  }
	// Teikna boltann, spaðann og stigin
  fill(255,201,14);
  ellipse(x, y, boltiStaerd, boltiStaerd);
  fill(168);
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	fill(0);
	text("Stig: " + stig,20,20);
  if (kassi==1){
  fill(255,255,255)
  rect(kassiX, kassiY, kassiBreidd, kassiLengd, kassiHorn);

  }
}

class kassiTeikna{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.lengd = 40;
    this.breidd = 60;
    this.horn = 20;
  }
show(){
  rect(this.x, this.y, this.breidd, this.lengd, this.horn);
}
snertir(){
  return (thix.x)
}
}
