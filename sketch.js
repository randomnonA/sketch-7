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
  background(255, 255, 255);
  image(capture, 0, 0, width, width * webcam.height / webcam.width);
  filter(INVERT);
  
  
}