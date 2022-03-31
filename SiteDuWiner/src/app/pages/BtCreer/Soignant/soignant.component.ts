import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './soignant.component.html',
  styleUrls: ['./soignant.component.scss']
})
export class SoignantComponent implements OnInit {

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
