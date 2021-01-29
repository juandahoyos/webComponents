import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovisionarMedidorComponent } from './aprovisionar-medidor.component';

describe('AprovisionarMedidorComponent', () => {
  let component: AprovisionarMedidorComponent;
  let fixture: ComponentFixture<AprovisionarMedidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovisionarMedidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovisionarMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
