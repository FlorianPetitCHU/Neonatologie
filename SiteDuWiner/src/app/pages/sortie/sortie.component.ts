import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.scss']
})
export class SortieComponent implements OnInit {
  secondSelectValue = null;
  test = "";
  Sortie = "";
  val1 = "";
  val2 = "";
  val3 = "";
  val4 = "";
  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
