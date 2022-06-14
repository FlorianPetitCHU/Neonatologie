import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-croissance',
  templateUrl: './croissance.component.html',
  styleUrls: ['./croissance.component.scss']
})
export class CroissanceComponent implements OnInit {
  test = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}
