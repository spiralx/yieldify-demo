import { Velocity } from './velocity';

// ----------------------------------------------------------------------------

describe('Velocity tests', () => {
  it('should generate a random velocity', () => {
    let velocity: Velocity = Velocity.randomVelocity(50);

    expect(velocity).toBeDefined();
    expect(velocity.dx).not.toBeGreaterThan(0.75);
    expect(velocity.dx).not.toBeLessThan(-0.75);
    expect(velocity.dy).not.toBeGreaterThan(0.75);
    expect(velocity.dy).not.toBeLessThan(-0.75);
  });

  it('should initialise correctly', () => {
    let velocity: Velocity = new Velocity(0, 0);

    expect(velocity.dx).toEqual(0);
    expect(velocity.dy).toEqual(0);
  });
});
