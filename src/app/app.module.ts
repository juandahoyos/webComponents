import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { createCustomElement } from '@angular/elements';
import { AprovisionarMedidorComponent, MedidorComponentModule } from './components/public_api';
import { AppRoutingModule } from './app-routing.module';
import { TestComponentsModule } from './test-components/test-components.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedidorComponentModule,
    TestComponentsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [AprovisionarMedidorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  // constructor(injector: Injector) {}

  // ngDoBootstrap() {}

  // const medidor = createCustomElement(AprovisionarMedidorComponent, {injector});
  //   customElements.define('app-aprovisionar-medidor', medidor);
}
