import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AprovisionarMedidorComponent } from './aprovisionar-medidor/aprovisionar-medidor.component';
import { BaseService } from './services/base.service';
import { FronteraService } from './aprovisionar-medidor/shared/service/frontera.service';
import { HttpClientModule } from '@angular/common/http';
import { EpmButtonsModule } from '@epm/webcomponents/buttons';
import { EpmFormsModule } from '@epm/webcomponents/forms';
import { EpmFormsValidacionesModule } from '@epm/webcomponents/forms-validaciones';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpmToastsModule } from '@epm/webcomponents/toasts';
import { DatePipe } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AprovisionarMedidorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EpmButtonsModule,
    EpmFormsModule,
    EpmFormsValidacionesModule,
    FormsModule,
    ReactiveFormsModule,
    EpmToastsModule,
  ],
  entryComponents: [AprovisionarMedidorComponent],
  providers: [ BaseService, FronteraService, FormBuilder, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const medidor = createCustomElement(AprovisionarMedidorComponent, {injector});
    customElements.define('app-aprovisionar-medidor', medidor);
  }

  ngDoBootstrap() {}
}
