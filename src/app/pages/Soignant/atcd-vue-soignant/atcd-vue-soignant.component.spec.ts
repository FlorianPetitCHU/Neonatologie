import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtcdVueSoignantComponent } from './atcd-vue-soignant.component';

describe('AtcdVueSoignantComponent', () => {
  let component: AtcdVueSoignantComponent;
  let fixture: ComponentFixture<AtcdVueSoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtcdVueSoignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtcdVueSoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
