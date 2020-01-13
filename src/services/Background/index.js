import backgroundImage from '../../assets/background.png';

export default class Background {
  constructor({ canvas, ctx }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.dx = 0;
    this.maxWidth = 1280;

    this.init();
  }

  init() {
    this.image.src = backgroundImage;

    this.image.onload = () => {
      this.draw();
    }
  }

  draw() {
    if (!this.image.complete) {
      return;
    }

    if (this.dx <= -this.maxWidth) {
      this.dx = 0;
    } else {
      this.dx -= 1;
    }

    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      this.dx,
      0,
      this.image.width,
      this.image.height,
    );
  }
}
