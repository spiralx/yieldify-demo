import { Component, ViewChild, AfterViewInit } from '@angular/core';

import Ball from '../balls/ball';
import { Point } from '../balls/point';
import { Velocity } from '../balls/velocity';

// ----------------------------------------------------------------------------

const MAX_BALLS = 10;

// ----------------------------------------------------------------------------

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  size: number = 5;
  maxSpeed: number = 50;

  canvasWidth: number;
  canvasHeight: number;
  context: CanvasRenderingContext2D;

  balls: Ball[] = [];

  lastUpdate: number = 0;

  @ViewChild('demoCanvas') demoCanvas;

  ngAfterViewInit() {
    const canvas = this.demoCanvas.nativeElement;

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  clicked(event) {
    console.dir(event);

    if (this.balls.length < MAX_BALLS - 1) {
      const p = new Point(event.layerX, event.layerY);
      const v = Velocity.randomVelocity(this.maxSpeed);
      this.balls.push(new Ball(p, v, this.size));
    }
  }

  /* Update ball positions and redraw the canvas */
  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    if (this.lastUpdate > 0) {
      this.update();
    } else {
      this.lastUpdate = Date.now();
    }

    const ctx = this.context;
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (const ball of this.balls) {
      ball.draw(ctx);
    }
  }

  /* Apply movement to balls */
  update() {
    const now = Date.now();
    const diff = now - this.lastUpdate;

    for (const ball of this.balls) {
      ball.update(diff);

      // Check for reflections off of the walls.
      const bounds = ball.getBounds();

      if (bounds[0].x < 0) {
        console.info('Left', bounds[0], bounds[1]);
        ball.dump();
        ball.reflect(0);
        ball.position.x = -bounds[0].x + ball.radius;
        ball.dump();
      } else if (bounds[1].x > this.canvasWidth) {
        console.info('Right', bounds[0], bounds[1]);
        ball.dump();
        ball.reflect(Math.PI);
        ball.position.x = this.canvasWidth - (bounds[1].x - this.canvasWidth) - ball.radius;
        ball.dump();
      }

      if (bounds[0].y < 0) {
        console.info('Top', bounds[0], bounds[1]);
        ball.dump();
        ball.reflect(Math.PI * 3 / 2);
        ball.position.y = -bounds[0].y + ball.radius;
        ball.dump();
      } else if (bounds[1].y > this.canvasHeight) {
        console.info('Bottom', bounds[0], bounds[1]);
        ball.dump();
        ball.reflect(Math.PI * 1 / 2);
        ball.position.y = this.canvasHeight - (bounds[1].y - this.canvasHeight) - ball.radius;
        ball.dump();
      }
    }

    this.lastUpdate = now;
  }
}
