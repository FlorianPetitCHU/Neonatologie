import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossesseVueSoignantComponent } from './grossesse-vue-soignant.component';

describe('GrossesseVueSoignantComponent', () => {
  let component: GrossesseVueSoignantComponent;
  let fixture: ComponentFixture<GrossesseVueSoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossesseVueSoignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossesseVueSoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
