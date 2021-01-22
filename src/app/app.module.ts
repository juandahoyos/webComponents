import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AprovisionaMedidorComponent } from './aprovisiona-medidor/aprovisiona-medidor.component';

@NgModule({
  declarations: [
    AppComponent,
    AprovisionaMedidorComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[AprovisionaMedidorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const medidor = createCustomElement(AprovisionaMedidorComponent, {injector});
    customElements.define('app-aprovisiona-medidor', medidor);
  }

  ngDoBootstrap() {}
 }
