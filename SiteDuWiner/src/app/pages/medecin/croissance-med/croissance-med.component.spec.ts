import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissanceMedComponent } from './croissance-med.component';

describe('CroissanceMedComponent', () => {
  let component: CroissanceMedComponent;
  let fixture: ComponentFixture<CroissanceMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroissanceMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroissanceMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
