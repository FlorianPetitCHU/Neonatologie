import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recueil-de-donnes-piedatriques',
  templateUrl: './recueil-de-donnes-piedatriques.component.html',
  styleUrls: ['./recueil-de-donnes-piedatriques.component.scss']
})
export class RecueilDeDonnesPiedatriquesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
