import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInscipcionListadoComponent } from './alumno-inscipcion-listado.component';

describe('AlumnoInscipcionListadoComponent', () => {
  let component: AlumnoInscipcionListadoComponent;
  let fixture: ComponentFixture<AlumnoInscipcionListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInscipcionListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInscipcionListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
