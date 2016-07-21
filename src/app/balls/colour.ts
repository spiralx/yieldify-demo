
/* Convert a float from 0 to 1 to an integer from 0 to 255 */
function f2n(val: number): number {
  return Math.round(val * 255);
}

// ----------------------------------------------------------------------------

function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) {
    t += 1;
  } else if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  } else if (t < 1 / 2) {
    return q;
  } else if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
}

// ----------------------------------------------------------------------------

/* Convert HSL values (from 0 to 1) to their RGB equivalents (from 0 to 255). */
function hslToRgb(hue: number, sat: number, lum: number) {
  let r: number, g: number, b: number;

  if (sat === 0) {
    r = g = b = lum;
  } else {
    const q = lum < 0.5 ? lum * (1 + sat) : lum + sat - lum * sat;
    const p = 2 * lum - q;

    r = hueToRgb(p, q, hue + 1 / 3);
    g = hueToRgb(p, q, hue);
    b = hueToRgb(p, q, hue - 1 / 3);
  }

  return {
    r: f2n(r),
    g: f2n(g),
    b: f2n(b)
  };
}

// ----------------------------------------------------------------------------

/*
 * Generate a random RGB colour in CSS "rgb(r, g, b)" format,
 * by using the HSL colour space to fix saturation and luminance
 * and randomising only the hue.
 */
export function randomColour(): string {
  const rgb = hslToRgb(Math.random(), 1, 0.8);
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}
