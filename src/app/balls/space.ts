import { Ball } from '../balls/ball';
import { Point } from '../balls/point';
import { Velocity } from '../balls/velocity';

// ----------------------------------------------------------------------------

/**
 * This class wraps the 'physics' of the demo - particle motion and
 * simple models for gravity and friction.
 */
export class Space {
  gravity: number = 0.25;
  friction: number = 0.2;

  size: number = 0;

  balls: Ball[] = [];

  /* Number of balls */
  public get count(): number {
    return this.balls.length;
  }

  /* Create a new ball with given position and radius and a random velocity */
  public addBall(x: number, y: number, avgSpeed: number, radius: number) {
    const p = new Point(x / this.size, 1 - y / this.size);
    const v = Velocity.randomVelocity(avgSpeed);

    this.balls.push(new Ball(p, v, radius / 100));
  }

  /* Clear all balls */
  public clearBalls() {
    this.balls = [];
  }

  /* Apply movement and forces to balls */
  public update(deltaT: number) {
    for (const ball of this.balls) {
      if (ball.velocity.dx === 0 && ball.velocity.dy === 0) {
        continue;
      }

      // Apply velocity and gravity.
      ball.accelerate(this.gravity);
      ball.move(deltaT);

      /* Check left and right wall boundary conditions */
      if (ball.position.x < ball.radius) {
        ball.velocity.dx *= -1;
        ball.velocity.dx *= (1 - this.friction);
        ball.velocity.dy *= (1 - this.friction);
        ball.position.x = ball.radius;
      } else if (ball.position.x > (1 - ball.radius)) {
        ball.velocity.dx *= -1;
        ball.velocity.dx *= (1 - this.friction);
        ball.velocity.dy *= (1 - this.friction);
        ball.position.x = 1 - ball.radius;
      }

      /* Check top and bottom wall boundary conditions */
      if (ball.position.y < ball.radius) {
        ball.velocity.dy *= -1;
        ball.velocity.dx *= (1 - this.friction);
        ball.velocity.dy *= (1 - this.friction);
        ball.position.y = ball.radius;
      } else if (ball.position.y > (1 - ball.radius)) {
        ball.velocity.dy *= -1;
        ball.velocity.dx *= (1 - this.friction);
        ball.velocity.dx *= (1 - this.friction);
        ball.position.y = 1 - ball.radius;
      }

      /* Damp small velocities so balls come to rest */
      if (Math.abs(ball.velocity.dx) <= 0.01) {
        ball.velocity.dx = 0;
      }
      if (Math.abs(ball.velocity.dy) <= 0.01) {
        ball.velocity.dy = 0;
      }
    }
  }

  /* Draw the entire space */
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.size, this.size);

    for (const ball of this.balls) {
      ball.draw(ctx, this.size);
    }
  }
}
