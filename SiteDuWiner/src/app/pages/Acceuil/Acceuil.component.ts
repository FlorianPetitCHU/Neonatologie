
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './Acceuil.component.html',
  styleUrls: ['./Acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  secondSelectValue = null;
  test = "";
  Admission = "";
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
