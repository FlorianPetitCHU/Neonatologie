import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSoignantComponent } from './soignant.component';

describe('LogSoignantComponent', () => {
  let component: LogSoignantComponent;
  let fixture: ComponentFixture<LogSoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSoignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
