import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecueilDeDonnesPiedatriquesComponent } from './recueil-de-donnes-piedatriques.component';

describe('RecueilDeDonnesPiedatriquesComponent', () => {
  let component: RecueilDeDonnesPiedatriquesComponent;
  let fixture: ComponentFixture<RecueilDeDonnesPiedatriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecueilDeDonnesPiedatriquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecueilDeDonnesPiedatriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
