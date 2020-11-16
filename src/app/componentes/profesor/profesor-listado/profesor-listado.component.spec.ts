import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorListadoComponent } from './profesor-listado.component';

describe('ProfesorListadoComponent', () => {
  let component: ProfesorListadoComponent;
  let fixture: ComponentFixture<ProfesorListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
