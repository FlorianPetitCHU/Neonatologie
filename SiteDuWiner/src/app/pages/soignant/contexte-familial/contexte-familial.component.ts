import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contexte-familial',
  templateUrl: './contexte-familial.component.html',
  styleUrls: ['./contexte-familial.component.scss']
})
export class ContexteFamilialComponent implements OnInit {
  secondSelectValue = null;
  val1 = "";
  val2 = "";
  val3 = "";
  val4 = "";
  poids=  0;
  Naissance= 0;
  
  ContexteFamilial = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}


