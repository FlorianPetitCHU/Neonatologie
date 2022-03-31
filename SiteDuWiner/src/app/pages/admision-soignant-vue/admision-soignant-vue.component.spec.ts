import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionSoignantVueComponent } from './admision-soignant-vue.component';

describe('AdmisionSoignantVueComponent', () => {
  let component: AdmisionSoignantVueComponent;
  let fixture: ComponentFixture<AdmisionSoignantVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisionSoignantVueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionSoignantVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
