import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignerComponent } from './dialog-signer.component';

describe('DialogSignerComponent', () => {
  let component: DialogSignerComponent;
  let fixture: ComponentFixture<DialogSignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
