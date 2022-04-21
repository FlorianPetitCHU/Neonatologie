import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolMedComponent } from './evol-med.component';

describe('EvolMedComponent', () => {
  let component: EvolMedComponent;
  let fixture: ComponentFixture<EvolMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
