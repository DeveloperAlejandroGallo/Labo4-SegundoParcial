import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaListadoComponent } from './materia-listado.component';

describe('MateriaListadoComponent', () => {
  let component: MateriaListadoComponent;
  let fixture: ComponentFixture<MateriaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
