

/**
* Class to wrap an (x, y) position. Values for each
* are in the range 0 to 1.
*/
export class Point {
  constructor(public x: number, public y: number) {
  }

  /* Update the position by the given deltas. */
  public move(dx: number, dy: number) {
    // console.log(distance, angle, dx, dy);
    this.x += dx;
    this.y += dy;
  }

  public toString() {
    return `Point(x: ${this.x.toFixed(4)}, y: ${this.y.toFixed(4)})`;
  }
}
