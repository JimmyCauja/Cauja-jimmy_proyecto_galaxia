class Galaxia{
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);
        this.angle = 0;
        this.sentido = random() < 0.5 ? true : false;

        this.centro = createVector(width / 2, height / 2);
        this.distancia = this.pos.dist(this.centro);

        this.interpolador = 0.01;

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
        
    }
    display() {
            push();
            translate(this.pos.x, this.pos.y);
            rotate(this.angle);
            square(0, 0, 100);
            pop();
            
        }
    }
