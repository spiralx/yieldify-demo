import { Ball } from './ball';
import { Point } from './point';
import { Velocity } from './velocity';

// ----------------------------------------------------------------------------

describe('Ball tests', () => {
  it('should initialise correctly', () => {
    let ball: Ball = new Ball(new Point(0, 0), new Velocity(0.1, 0.1), 0.1);

    expect(ball.radius).toEqual(0.1);
    expect(ball.colour).toMatch(/rgb\(\d+, \d+, \d+\)/);
  });

  it('accelerate() should work', () => {
    let ball: Ball = new Ball(new Point(0, 0.5), new Velocity(0.1, 0.1), 0.1);
    ball.accelerate(0.25);

    expect(ball.velocity.dy).toBeCloseTo(0.0375);
  });

  it('move() should work', () => {
    let ball: Ball = new Ball(new Point(0, 0.5), new Velocity(0.1, 0.1), 0.1);
    ball.move(1000);

    expect(ball.position.x).toEqual(0.1);
    expect(ball.position.y).toEqual(0.6);
  });
});
