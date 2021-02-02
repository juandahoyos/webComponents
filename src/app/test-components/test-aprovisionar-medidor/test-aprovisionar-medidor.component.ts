import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-aprovisionar-medidor',
  templateUrl: './test-aprovisionar-medidor.component.html',
  styleUrls: ['./test-aprovisionar-medidor.component.css']
})
export class TestAprovisionarMedidorComponent implements OnInit {

  public idFrontera: string;

  constructor() {
    this.idFrontera = '03c435dd-3606-4ae4-4ef2-08d872c581cb'
  }

  ngOnInit(): void {
  }

}
