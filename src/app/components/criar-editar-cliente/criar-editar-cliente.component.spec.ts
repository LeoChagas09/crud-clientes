import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarClienteComponent } from './criar-editar-cliente.component';

describe('CriarEditarClienteComponent', () => {
  let component: CriarEditarClienteComponent;
  let fixture: ComponentFixture<CriarEditarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditarClienteComponent]
    });
    fixture = TestBed.createComponent(CriarEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
