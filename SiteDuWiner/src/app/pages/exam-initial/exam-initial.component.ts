import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-initial',
  templateUrl: './exam-initial.component.html',
  styleUrls: ['./exam-initial.component.scss']
})
export class ExamInitialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}

