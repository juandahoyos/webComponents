import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAprovisionarMedidorComponent } from './test-aprovisionar-medidor/test-aprovisionar-medidor.component';


const routes: Routes = [
  {
    path: 'medidor-component',
    component: TestAprovisionarMedidorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestComponentsRoutingModule { }
