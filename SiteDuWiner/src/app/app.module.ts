import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdmissionComponent } from './pages/Admission/Admission.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/contexte-familial/contexte-familial.component';
import { AtcdFamComponent } from './pages/atcd-fam/atcd-fam.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GrosssessePeriodeNeonatComponent } from './pages/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
import { VaccinComponent } from './pages/vaccin/vaccin.component';
import { CroissanceComponent } from './pages/croissance/croissance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { ExamInitialComponent } from './pages/exam-initial/exam-initial.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AdmissionComponent,
    RecueilDeDonnesPiedatriquesComponent,
    ContexteFamilialComponent,
    AtcdFamComponent,
    GrosssessePeriodeNeonatComponent,
    VaccinComponent,
    CroissanceComponent,
    ExamInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
