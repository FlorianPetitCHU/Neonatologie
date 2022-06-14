import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtcdFamComponent } from './atcd-fam.component';

describe('AtcdFamComponent', () => {
  let component: AtcdFamComponent;
  let fixture: ComponentFixture<AtcdFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtcdFamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtcdFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
