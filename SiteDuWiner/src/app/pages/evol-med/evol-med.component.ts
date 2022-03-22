import { Component, OnInit } from '@angular/core';
import {writeJsonFile} from 'write-json-file';


@Component({
  selector: 'app-evol-med',
  templateUrl: './evol-med.component.html',
  styleUrls: ['./evol-med.component.scss']
})
export class EvolMedComponent implements OnInit {
    val3 = "";
    val4 = "";
    val5 = "";
    val6:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 private async onSubmit(){
  }
}
