import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaSortieComponent } from './prepa-sortie.component';

describe('PrepaSortieComponent', () => {
  let component: PrepaSortieComponent;
  let fixture: ComponentFixture<PrepaSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
