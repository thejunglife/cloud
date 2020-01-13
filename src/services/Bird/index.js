import birdImage from '../../assets/bird2.png';

export default class Bird {
  constructor(ctx) {
    this.ctx = ctx;
    this.frame = 0;
    this.frames = 4;
    this.tick = 0;
    this.image = new Image();
    this.dx = 0;
    this.dy = 0;
    this.width = 948 / this.frames;
    this.height = 400;

    this.init();
  }

  init() {
    this.image.src = birdImage;

    this.image.onload = () => {
      this.draw();
    }
  }

  draw() {
    if (!this.image.complete) {
      return;
    }

    this.update();

    this.ctx.drawImage(
      this.image,
      this.frame * this.width / this.frames,
      0,
      this.width,
      this.height,
      0,
      0,
      this.width,
      this.height,
    );
  }

  update() {
    const TICKS_PER_FRAME = 10;

    this.tick += 1;

    if (this.tick > TICKS_PER_FRAME) {
      this.tick = 0;

      if (this.frame < this.frames - 1) {
        this.frame += 1;
      } else {
        this.frame = 0;
      }
    }
  }
}

