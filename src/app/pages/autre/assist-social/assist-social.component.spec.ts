import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistSocialComponent } from './assist-social.component';

describe('AssistSocialComponent', () => {
  let component: AssistSocialComponent;
  let fixture: ComponentFixture<AssistSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
