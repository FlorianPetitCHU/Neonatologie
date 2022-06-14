import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesComponent } from './kines.component';

describe('KinesComponent', () => {
  let component: KinesComponent;
  let fixture: ComponentFixture<KinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
