import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamInitialComponent } from './exam-initial.component';

describe('ExamInitialComponent', () => {
  let component: ExamInitialComponent;
  let fixture: ComponentFixture<ExamInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
