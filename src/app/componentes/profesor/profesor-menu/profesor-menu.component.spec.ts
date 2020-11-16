import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorMenuComponent } from './profesor-menu.component';

describe('ProfesorMenuComponent', () => {
  let component: ProfesorMenuComponent;
  let fixture: ComponentFixture<ProfesorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
