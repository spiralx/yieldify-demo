import {
  // async,
  // inject,
  addProviders
} from '@angular/core/testing';

// import { TestComponentBuilder } from '@angular/compiler/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([HomeComponent]);
  });

  // it('should set canvas size in ngAfterViewInit', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   tcb.createAsync(HomeComponent).then(fixture => {
  //     fixture.detectChanges();
  //
  //     // expect(fixture.componentInstance.demoCanvas).toBeDefined();
  //     // expect(fixture.componentInstance.canvasSize).toBe(600);
  //   });
  // })));

  // it('should set rendering context in ngAfterViewInit', inject([HomeComponent], (home) => {
  //   expect(componentFixture.componentInstance.demoCanvas).toBeUndefined();
  //   componentFixture.detectChanges();
  //
  //   expect(componentFixture.componentInstance.demoCanvas).toBeDefined();
  //   home.ngAfterViewInit();
  //   expect(home.context).toBeDefined();
  //   expect(home.context instanceof CanvasRenderingContext2D).toBeTruthy();
  // }));

});
