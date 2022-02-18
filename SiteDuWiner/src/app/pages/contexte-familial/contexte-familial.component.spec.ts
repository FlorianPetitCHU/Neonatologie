import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContexteFamilialComponent } from './contexte-familial.component';

describe('ContexteFamilialComponent', () => {
  let component: ContexteFamilialComponent;
  let fixture: ComponentFixture<ContexteFamilialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContexteFamilialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContexteFamilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
