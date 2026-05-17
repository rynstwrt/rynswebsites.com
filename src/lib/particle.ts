export class Particle {
    ctx: CanvasRenderingContext2D;
    position: { x: number, y: number };
    initSpeed: number;
    speed: number;
    direction: { x: number, y: number };
    color: string;
    size: number;
    opacity: number;

    constructor(ctx, position = {x: 0, y: 0},
                initSpeed = 1,
                direction = {x: 1, y: 0.9},
                color = "#fff000",
                size = 10,
                opacity = 1) {
        this.ctx = ctx;
        this.position = position;
        this.initSpeed = initSpeed;
        this.speed = this.initSpeed;
        this.direction = direction;
        this.color = color;
        this.size = size;
        this.opacity = opacity;
    }

    update() {
        if (this.position.x <= 0 || this.position.x + this.size >= innerWidth) {
            this.direction.x *= -1;
        }

        if (this.position.y <= 0 || this.position.y + this.size >= innerHeight)
            this.direction.y *= -1;

        this.position.x += this.direction.x * this.speed;
        this.position.y += this.direction.y * this.speed;
    }

    draw() {
        this.ctx!.fillStyle = `rgba(208, 101, 68, ${this.opacity})`;

        this.ctx?.beginPath();
        this.ctx?.moveTo(this.position.x, this.position.y)
        this.ctx?.rect(this.position.x, this.position.y, this.size, this.size);
        // this.ctx?.lineTo(this.position.x, this.position.y);
        this.ctx?.closePath();
        this.ctx?.fill();
    }
}