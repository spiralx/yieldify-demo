import { Point } from './point';

// ----------------------------------------------------------------------------

describe('Point tests', () => {
  it('should initialise correctly', () => {
    let point: Point = new Point(0, 0);

    expect(point.x).toEqual(0);
    expect(point.y).toEqual(0);
  });

  it('should update x correctly', () => {
    let point: Point = new Point(0, 0);
    point.move(0.5, 0);

    expect(point.x).toEqual(0.5);
    expect(point.y).toEqual(0);
  });

  it('should update y correctly', () => {
    let point: Point = new Point(0, 0);
    point.move(0, 0.25);

    expect(point.x).toEqual(0);
    expect(point.y).toEqual(0.25);
  });
});
