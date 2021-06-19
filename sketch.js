var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("shipp.jpg")
  //load image for the treasure background
  bg2 = loadImage("gold-treasure.jpg")
}

function setup() {
  createCanvas(1440,680);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  
  if(score === 3) {
    clear()
    background(bg2)
    fill("YELLOW")
    textSize(40);
    text("TREASURE UNLOCKED YAY !",450, 100);
    text("_________________________",450, 130);
  }

  drawSprites()
}