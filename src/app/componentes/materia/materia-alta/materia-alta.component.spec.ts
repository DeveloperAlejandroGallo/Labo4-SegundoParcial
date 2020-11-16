import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAltaComponent } from './materia-alta.component';

describe('MateriaAltaComponent', () => {
  let component: MateriaAltaComponent;
  let fixture: ComponentFixture<MateriaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
