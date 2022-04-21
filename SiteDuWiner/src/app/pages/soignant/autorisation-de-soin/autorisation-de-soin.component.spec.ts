import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationDeSoinComponent } from './autorisation-de-soin.component';

describe('AutorisationDeSoinComponent', () => {
  let component: AutorisationDeSoinComponent;
  let fixture: ComponentFixture<AutorisationDeSoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorisationDeSoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorisationDeSoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
