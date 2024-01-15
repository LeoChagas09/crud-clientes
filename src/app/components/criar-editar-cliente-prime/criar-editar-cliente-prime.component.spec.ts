import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarClientePrimeComponent } from './criar-editar-cliente-prime.component';

describe('CriarEditarClientePrimeComponent', () => {
  let component: CriarEditarClientePrimeComponent;
  let fixture: ComponentFixture<CriarEditarClientePrimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditarClientePrimeComponent]
    });
    fixture = TestBed.createComponent(CriarEditarClientePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
