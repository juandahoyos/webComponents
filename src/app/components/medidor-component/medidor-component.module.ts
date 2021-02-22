import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AprovisionarMedidorComponent } from './aprovisionar-medidor/aprovisionar-medidor.component';
import { ApiModule } from 'medidores/api';
import { EpmButtonsModule } from '@epm/webcomponents/buttons';
import { EpmFormsModule } from '@epm/webcomponents/forms';
import { EpmFormsValidacionesModule } from '@epm/webcomponents/forms-validaciones';
import { EpmToastsModule } from '@epm/webcomponents/toasts';

@NgModule({
  declarations: [AprovisionarMedidorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule,
    EpmButtonsModule,
    EpmFormsModule,
    EpmFormsValidacionesModule,
    EpmToastsModule,
  ],
  exports: [AprovisionarMedidorComponent],
})
export class MedidorComponentModule { }
