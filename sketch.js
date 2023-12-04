let g1;
let g2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  g1 = new Galaxia(200, 200);
  g2 = new Galaxia(width - 200, height - 200);
}

function draw() {
  background(random(0,0));
  if (g1.distancia < 10) {
    circle(width / 2, height /2, 200);
  } else {
    g1.update();
    g1.display();

    g2.update();
    g2.display();
  }
}
