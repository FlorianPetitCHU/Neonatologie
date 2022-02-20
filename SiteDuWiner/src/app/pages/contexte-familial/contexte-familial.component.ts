import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contexte-familial',
  templateUrl: './contexte-familial.component.html',
  styleUrls: ['./contexte-familial.component.scss']
})
export class ContexteFamilialComponent implements OnInit {
  secondSelectValue = null;


  constructor() { }

  ngOnInit(): void {
  }

}

