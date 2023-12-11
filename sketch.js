let g1;
let g2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  g1 = new Galaxia(-300, -300);
  g2 = new Galaxia(300, 300);
}

function draw() {
  background(random(0,0));
  translate(width / 2, height / 2);
  if (g1.distancia < 10) {
    scale(2);
    g1.update(); g1.display();
    
  } else {
    g1.update();
    g1.display();

    g2.update();
    g2.display();
  }
}
