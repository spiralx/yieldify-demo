
const _2PI = Math.PI * 2;

// ----------------------------------------------------------------------------

/**
 * Class to wrap a velocity.
 */
export class Velocity {
  /* Generate a new Velocity instance with a random direction
     and a speed that is random around an average value. */
  static randomVelocity(avgSpeed: number) {
    const distance = (Math.random() + 0.5) * avgSpeed / 100;
    const angle = Math.random() * _2PI;

    const dx = distance * Math.cos(angle);
    const dy = distance * Math.sin(angle);

    return new Velocity(dx, dy);
  }

  constructor(public dx: number, public dy: number) {
  }

  public toString() {
    return `Velocity(dx: ${this.dx.toFixed(4)}, dy: ${this.dy.toFixed(4)})`;
  }
}
