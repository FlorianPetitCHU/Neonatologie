import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grosssesse-periode-neonat',
  templateUrl: './grosssesse-periode-neonat.component.html',
  styleUrls: ['./grosssesse-periode-neonat.component.scss']
})
export class GrosssessePeriodeNeonatComponent implements OnInit {
secondSelectValue = null;
  test = "";
  constructor() { }
  val1 = "";
  val2 = "";
  val3 = "";
  val4 = "";
  val5 = "";
  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}

  sign1="";
  signer(){
    if(this.sign1 != ''){
      return false
    }
    else{
      return true
    }
  }
}
