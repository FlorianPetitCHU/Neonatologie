import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './Admission.component.html',
  styleUrls: ['./Admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  secondSelectValue = null;
  test = "";
  AntecedentsFamiliaux = "";
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
