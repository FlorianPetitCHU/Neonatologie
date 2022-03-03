import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogSignerComponent } from '../dialog-signer/dialog-signer.component';
@Component({
  selector: 'app-grosssesse-periode-neonat',
  templateUrl: './grosssesse-periode-neonat.component.html',
  styleUrls: ['./grosssesse-periode-neonat.component.scss']
})
export class GrosssessePeriodeNeonatComponent implements OnInit {
secondSelectValue = null;
  test = "";
  constructor(public dialog: MatDialog) { }
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
  openDialogSigner() {

    this.dialog.open(DialogSignerComponent);
  }
}
