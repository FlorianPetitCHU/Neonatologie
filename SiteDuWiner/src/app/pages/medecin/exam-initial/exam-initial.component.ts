import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-initial',
  templateUrl: './exam-initial.component.html',
  styleUrls: ['./exam-initial.component.scss']
})
export class ExamInitialComponent implements OnInit {
pouValue = null;
AuscCardValue = null;
VentilSpont = null;
Signedelutte = null;
Auscultrespiratoire = null;
Abdomen = null;
NouveauNe = null;
OrgGenExt = null;
Anus = null;
TA = null;
TP = null;
GSM = null;
Fontanelle = null;
RA = null;
Neuro = null;
analgesie = null;

BoucheOreilleCou = null;
  constructor() { }

  ngOnInit(): void {
  }
role : any;
  role_med() {this.role = 1;
  console.log(this.role);}
  role_soignant() {this.role = 2;
  console.log(this.role);}
}

