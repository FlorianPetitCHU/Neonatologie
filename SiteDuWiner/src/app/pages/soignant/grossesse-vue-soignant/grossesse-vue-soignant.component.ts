import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grossesse-vue-soignant',
  templateUrl: './grossesse-vue-soignant.component.html',
  styleUrls: ['./grossesse-vue-soignant.component.scss']
})
export class GrossesseVueSoignantComponent implements OnInit {
  secondSelectValue = null;
  antibio = null;
  thirdSelectValue = null;
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
