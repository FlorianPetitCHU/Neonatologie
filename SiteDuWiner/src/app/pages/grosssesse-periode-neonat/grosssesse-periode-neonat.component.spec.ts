import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrosssessePeriodeNeonatComponent } from './grosssesse-periode-neonat.component';

describe('GrosssessePeriodeNeonatComponent', () => {
  let component: GrosssessePeriodeNeonatComponent;
  let fixture: ComponentFixture<GrosssessePeriodeNeonatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrosssessePeriodeNeonatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrosssessePeriodeNeonatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
