import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kines',
  templateUrl: './kines.component.html',
  styleUrls: ['./kines.component.scss']
})
export class KinesComponent implements OnInit {
cheminImage:any = "../../img/kines.PNG"
  constructor() { }

  ngOnInit(): void {
  }

}
