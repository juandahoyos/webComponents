import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAprovisionarMedidorComponent } from './test-aprovisionar-medidor.component';

describe('TestAprovisionarMedidorComponent', () => {
  let component: TestAprovisionarMedidorComponent;
  let fixture: ComponentFixture<TestAprovisionarMedidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAprovisionarMedidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAprovisionarMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
