let webcam;
let mic;

function setup() {
  createCanvas(900, 900);
  webcam = createCapture(VIDEO,{flipped:true});
  webcam.size(440,400)
  webcam.hide();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 0, 0);
  image(webcam, 0, 0, webcam.width, webcam.height);
  filter(INVERT);
  
  
}