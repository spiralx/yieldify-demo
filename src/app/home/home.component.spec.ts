import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([HomeComponent]);
  });

  it('should set canvas size in ngAfterViewInit', inject([HomeComponent], (home) => {
    home.ngAfterViewInit();
    expect(home.canvasSize).toBe(600);
  }));

  it('should set rendering context in ngAfterViewInit', inject([HomeComponent], (home) => {
    home.ngAfterViewInit();
    expect(home.context).toBeDefined();
    expect(home.context instanceof CanvasRenderingContext2D).toBeTruthy();
  }));

});
