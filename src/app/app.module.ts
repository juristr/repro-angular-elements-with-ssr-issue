import { BrowserModule } from '@angular/platform-browser';
import { Component, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@Component({
  template: ` Hi there `,
})
export class CustomAngularElementComponent {}

@NgModule({
  declarations: [AppComponent, CustomAngularElementComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  // tslint:disable-next-line: typedef
  ngDoBootstrap() {
    const el = createCustomElement(CustomAngularElementComponent, {
      injector: this.injector,
    });
    customElements.define('my-custom-element', el);
  }
}
