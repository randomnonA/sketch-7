let webcam;
let mic;
let sound;

async function setup() {
  createCanvas(900, 900);
  sound = await loadSound('media/freesound_community-underwater-white-noise-46423.mp3');
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
  //I wanted the volume to effect the frameRate since I was using random shades for the house
  //The camera fps also gets faster the louder you are
  let volSpeed = map(vol, 0, 1, 1, 30);
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

function mousePressed() {
  sound.play();
}