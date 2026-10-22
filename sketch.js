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
  let vol = mic.getLevel();
  let volSpeed = map(vol, 0, 0.5, 1, 30);
  frameRate(volSpeed);
  
  fill('green');
  stroke('yellow');
  strokeWeight(10);
  triangle(350, 600, 750, 600, 550, 450);
  
  push();
  fill(random(255));
  noStroke();
  rect(400, 600, 300, 300);
  pop();
  
  square(510, 810, 90)
  
  filter(INVERT);
}