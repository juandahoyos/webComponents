import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponentsRoutingModule } from './test-components-routing.module';
import { ApiModule, MedidorComponentModule } from '../components/public_api';
import { TestAprovisionarMedidorComponent } from './test-aprovisionar-medidor/test-aprovisionar-medidor.component';


@NgModule({
  declarations: [TestAprovisionarMedidorComponent],
  imports: [
    CommonModule,
    TestComponentsRoutingModule,
    MedidorComponentModule,
    ApiModule
  ]
})
export class TestComponentsModule { }
