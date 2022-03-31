import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.scss']
})
export class VaccinComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
