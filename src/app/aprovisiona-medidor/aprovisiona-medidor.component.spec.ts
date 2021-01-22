import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovisionaMedidorComponent } from './aprovisiona-medidor.component';

describe('AprovisionaMedidorComponent', () => {
  let component: AprovisionaMedidorComponent;
  let fixture: ComponentFixture<AprovisionaMedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovisionaMedidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovisionaMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
