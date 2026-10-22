let webcam;
let mic;

function setup() {
  createCanvas(900, 900);
  webcam = createCapture(VIDEO,{flipped:true});
  webcam.size(440,400)
  webcam.hide();
  mic = new p5.AudioIn();
  mic.start();
  frameRate(5);
}

function draw() {
  background("salmon");
  image(webcam, 0, 0, webcam.width, webcam.height);
  filter(INVERT);
  
  fill('red');
  noStroke();
  rect(400, 600, 20, 30)
  
  
  
  push();
  fill(random(255));
  noStroke();
  rect(400, 600, 300, 300);
  pop();
  
  fill('red');
  noStroke();
  square(510, 810, 90)
  
  
}