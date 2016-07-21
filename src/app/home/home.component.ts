import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Space } from '../balls/space';

// ----------------------------------------------------------------------------

/**
 * This component wraps the demo's canvas element and a
 * set of controls to adjust parameters and clear the
 * current state.
 */
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements AfterViewInit {
  /* Set from slider values. */
  radius: number = 3;
  maxBalls: number = 20;
  avgSpeed: number = 30;

  canvasSize: number;
  context: CanvasRenderingContext2D;

  space: Space = new Space();

  lastUpdate: number = 0;

  @ViewChild('demoCanvas') demoCanvas;

  ngAfterViewInit() {
    const canvas = this.demoCanvas.nativeElement;

    this.space.size = this.canvasSize = canvas.width;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  /* Add a new ball if we're not already at the maximum number */
  clicked(event) {
    if (this.space.balls.length < this.maxBalls) {
      this.space.addBall(event.layerX, event.layerY, this.avgSpeed, this.radius);
    }
  }

  /* Reset the demo and clear all the balls */
  reset() {
    this.space.clearBalls();
  }

  /* Update ball positions and redraw the canvas */
  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    // Update current state.
    const now = Date.now();

    if (this.lastUpdate > 0) {
      this.space.update(now - this.lastUpdate);
    }

    this.lastUpdate = now;

    // Redraw canvas.
    this.space.draw(this.context);
  }

}
