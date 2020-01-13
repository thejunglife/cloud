import Bird from '../Bird';
import Background from '../Background';

export default class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.background = new Background({
      canvas: this.canvas,
      ctx: this.ctx,
    });
    this.bird = new Bird(this.ctx);
  }

  init() {
    window.gameEngineProcessor = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(callback) {
        return setTimeout(callback, 1000/60);
      }

    this.engine();
  }

  engine() {
    window.gameEngineProcessor(this.engine.bind(this));

    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );

    this.background.draw();
    this.bird.draw();
  }
}
