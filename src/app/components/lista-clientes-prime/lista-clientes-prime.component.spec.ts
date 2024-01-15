import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesPrimeComponent } from './lista-clientes-prime.component';

describe('ListaClientesPrimeComponent', () => {
  let component: ListaClientesPrimeComponent;
  let fixture: ComponentFixture<ListaClientesPrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaClientesPrimeComponent]
    });
    fixture = TestBed.createComponent(ListaClientesPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
