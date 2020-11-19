import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInscipcionComponent } from './alumno-inscipcion.component';

describe('AlumnoInscipcionComponent', () => {
  let component: AlumnoInscipcionComponent;
  let fixture: ComponentFixture<AlumnoInscipcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoInscipcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInscipcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
