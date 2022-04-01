import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMedecinComponent } from './medecin.component';

describe('LogMedecinComponent', () => {
  let component: LogMedecinComponent;
  let fixture: ComponentFixture<LogMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
