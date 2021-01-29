import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FronteraService } from './service/frontera-service/frontera.service';
import { BaseService } from './service/base.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
    FronteraService
  ]
})
export class ApiModule { }
