import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMedComponent } from './toolbar-med.component';

describe('ToolbarMedComponent', () => {
  let component: ToolbarMedComponent;
  let fixture: ComponentFixture<ToolbarMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
