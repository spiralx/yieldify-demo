import { Space } from './space';

// ----------------------------------------------------------------------------

describe('Ball tests', () => {
  let space: Space;

  beforeEach(() => {
    space = new Space();
    space.size = 100;
  });

  it('should initialise correctly', () => {
    expect(space).toBeDefined();
    expect(space.count).toEqual(0);
  });

  it('addBall() should work', () => {
    expect(space.count).toEqual(0);

    space.addBall(50, 50, 50, 10);

    expect(space.count).toEqual(1);
    expect(space.balls[0].radius).toBe(0.1);

    space.addBall(0, 0, 20, 20);

    expect(space.count).toEqual(2);
    expect(space.balls[1].radius).toBe(0.2);
  });

  it('clearBalls() should work', () => {
    expect(space.count).toEqual(0);

    space.addBall(50, 50, 50, 10);
    space.addBall(0, 0, 20, 20);

    expect(space.count).toEqual(2);

    space.clearBalls();

    expect(space.count).toEqual(0);
  });
});
