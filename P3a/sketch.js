var h =0;

function setup() {
  createCanvas(400,400);
  fill(0);
  colorMode(RGB);
  frameRate(5);
}

function draw(){
  fill(255,0,128);
  background(255, 215, 0);
      for(var y = 0; y < height; y = y+1){
        
        for(var i = 0; i < random(1,13) ; i = i + 1) {
        ellipse(15 + i*25, 15 + y*31, 10, 10);
      }
    }
}
