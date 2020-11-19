import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorMateriasListadoComponent } from './profesor-materias-listado.component';

describe('ProfesorMateriasListadoComponent', () => {
  let component: ProfesorMateriasListadoComponent;
  let fixture: ComponentFixture<ProfesorMateriasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorMateriasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorMateriasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
