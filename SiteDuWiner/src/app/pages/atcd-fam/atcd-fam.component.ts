import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atcd-fam',
  templateUrl: './atcd-fam.component.html',
  styleUrls: ['./atcd-fam.component.scss']
})
export class AtcdFamComponent implements OnInit {
secondSelectValue = null;
  test = "";
  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
