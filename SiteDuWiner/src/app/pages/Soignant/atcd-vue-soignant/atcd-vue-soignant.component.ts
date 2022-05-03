import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-atcd-vue-soignant',
  templateUrl: './atcd-vue-soignant.component.html',
  styleUrls: ['./atcd-vue-soignant.component.scss']
})
export class AtcdVueSoignantComponent implements OnInit {
  secondSelectValue = null;
  test = "";
  AntecedentsFamiliaux = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
