import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinVueSoignantComponent } from './vaccin-vue-soignant.component';

describe('VaccinVueSoignantComponent', () => {
  let component: VaccinVueSoignantComponent;
  let fixture: ComponentFixture<VaccinVueSoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinVueSoignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinVueSoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
