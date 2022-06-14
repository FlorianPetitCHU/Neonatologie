import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar-med',
  templateUrl: './toolbar-med.component.html',
  styleUrls: ['./toolbar-med.component.scss']
})
export class ToolbarMedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
