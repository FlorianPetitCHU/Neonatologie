import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-contexte-familial',
  templateUrl: './contexte-familial.component.html',
  styleUrls: ['./contexte-familial.component.scss']
})
export class ContexteFamilialComponent implements OnInit {
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


