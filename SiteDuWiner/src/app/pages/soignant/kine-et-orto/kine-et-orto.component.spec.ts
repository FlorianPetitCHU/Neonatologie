import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineEtOrtoComponent } from './kine-et-orto.component';

describe('KineEtOrtoComponent', () => {
  let component: KineEtOrtoComponent;
  let fixture: ComponentFixture<KineEtOrtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KineEtOrtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KineEtOrtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
