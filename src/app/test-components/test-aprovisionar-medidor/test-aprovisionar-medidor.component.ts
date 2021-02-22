import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-aprovisionar-medidor',
  templateUrl: './test-aprovisionar-medidor.component.html',
  styleUrls: ['./test-aprovisionar-medidor.component.css']
})
export class TestAprovisionarMedidorComponent implements OnInit {

  public idFrontera: string;

  constructor() {
    this.idFrontera = '4ac5d14f-35ef-4c53-4eea-08d872c581cb'
  }

  ngOnInit(): void {
  }

}
