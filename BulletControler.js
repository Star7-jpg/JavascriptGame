import Bullet from "./Bullet";

export default class BulletController {
    bullets = [];
    timerTilNextBullet = 0;
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot() {
        if (this.timerTilNextBullet <= 0) {
            this.bullets.push(new Bullet());
        }
    }
    draw(ctx) {}
}