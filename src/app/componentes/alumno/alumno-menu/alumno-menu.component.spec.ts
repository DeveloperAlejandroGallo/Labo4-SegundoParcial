import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMenuComponent } from './alumno-menu.component';

describe('AlumnoMenuComponent', () => {
  let component: AlumnoMenuComponent;
  let fixture: ComponentFixture<AlumnoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
