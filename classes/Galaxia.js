class Particula {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D().mult(random(1, 3));
      this.alpha = 255;
      
    }
  
    update() {
      this.pos.add(this.vel);
      this.alpha -= 1;
    }
  
    display() {
    noStroke();
    fill(255,118,10,200, this.alpha);
    ellipse(this.pos.x, this.pos.y, random(1,10),random(1,10));
        
    }
  
    estaViva() {
      return this.alpha > 0;
    }
  }
  
class Galaxia {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);
        this.angle = 0;
        this.sentido = random() < 0.5 ? true : false;

        this.centro = createVector(0.0, 0.0);
        this.distancia = this.pos.dist(this.centro);

        this.interpolador = 0.01;
        this.destellos = [];

    }

    update() {
        if (this.sentido) {
            this.angle += random(2);
        
        } else {
            this.angle -= random(2);
        }
        this.interpolador *= 1;

        if (this.distancia > 10) {
            this.pos.lerp(this.centro, this.interpolador);
        }
        this.distancia = this.pos.dist(this.centro);
        
        //destellos particulas

        for (let i = this.destellos.length - 1; i >= 0; i--) {
            this.destellos[i].update();
            if (!this.destellos[i].estaViva()) {
                this.destellos.splice(i, 1);
            }
        }
    
    }
    display() {
            push();
            translate(this.pos.x, this.pos.y);
            rotate(this.angle);
        
        for (let i = 0; i < this.destellos.length; i++) {
            this.destellos[i].display();
        }

        if (frameCount % 4 === 0) {
            this.destellos.push(new Particula(random(-50, 50), random(-50, 50)));
        }

            ellipse(0, 0, 100, random(1,20));
            pop();
            fill(0, 1, 255);
            noStroke();

        }
    }
