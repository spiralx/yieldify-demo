import { Point } from './point';
import { Velocity } from './velocity';

import { randomColour } from './colour';

// ----------------------------------------------------------------------------

/**
 * Instances of this class represent a single ball with a fixed
 * radius and background colour along with a current position and
 * velocity.
 */
export class Ball {
  colour: string;

  constructor(public position: Point, public velocity: Velocity, public radius: number) {
    this.colour = randomColour();
  }

  /* Update the ball's current position after deltaT ms have passed. */
  public update(deltaT: number, gravity: number) {
    const fac = deltaT / 1000;

    this.velocity.dy -= gravity * Math.pow(this.position.y, 2);

    const dx = fac * this.velocity.dx;
    const dy = fac * this.velocity.dy;
    console.log(`dx: ${dx.toFixed(4)}, dy: ${dy.toFixed(4)}, fac: ${fac}, gravity: ${gravity}`);

    this.position.move(dx, dy);
  }

  /* Draw this ball to the given canvas rendering context. */
  public draw(context: CanvasRenderingContext2D, size: number) {
    // console.info(`Ball.draw(x: ${this.position.x}, y: ${this.position.y}, col: ${this.colour}, rad: ${this.radius})`);
    context.beginPath();
    context.arc(this.position.x * size, (1 - this.position.y) * size, this.radius * size, 0, 2 * Math.PI, false);
    context.fillStyle = this.colour;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
  }

  /* Dump details to the console for debugging. */
  public dump() {
    console.log(`Ball(${this.position}, ${this.velocity}, col: ${this.colour} %c  %c, rad: ${this.radius})`,
      `display: inline-block; margin: 1px 0; background: ${this.colour}; border: solid 1px black`,
      `display: inline; background: white; border: none`);
  }

  public toString() {
    return `Ball(pos: ${this.position}, vel: ${this.velocity}, col: ${this.colour}, rad: ${this.radius})`;
  }
}
