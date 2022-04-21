import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdmissionComponent } from './pages/medecin/Admission/Admission.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/soignant/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/soignant/contexte-familial/contexte-familial.component';
import { AtcdFamComponent } from './pages/medecin/atcd-fam/atcd-fam.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GrosssessePeriodeNeonatComponent } from './pages/medecin/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
import { VaccinComponent } from './pages/medecin/vaccin/vaccin.component';
import { CroissanceComponent } from './pages/medecin/croissance/croissance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSignerComponent } from './pages/autre/dialog-signer/dialog-signer.component';
import { SortieComponent } from './pages/medecin/sortie/sortie.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';
import { PrepaSortieComponent } from './pages/autre/prepa-sortie/prepa-sortie.component';
import { AssistSocialComponent } from './pages/autre/assist-social/assist-social.component';
import { KinesComponent } from './pages/autre/kines/kines.component';
import { AcceuilComponent } from './pages/Acceuil/Acceuil.component';
import { AutorisationDeSoinComponent } from './pages/soignant/autorisation-de-soin/autorisation-de-soin.component';
import { AdmisionSoignantVueComponent } from './pages/soignant/admision-soignant-vue/admision-soignant-vue.component';
import { ToolbarMedComponent } from './partials/toolbar-med/toolbar-med.component';
import { OrthophonisteComponent } from './pages/autre/orthophoniste/orthophoniste.component';



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
    ExamInitialComponent,
    DialogSignerComponent,
    SortieComponent,
    EvolMedComponent,
    PrepaSortieComponent,
    AssistSocialComponent,
    KinesComponent,
    AcceuilComponent,
    AutorisationDeSoinComponent,
    AdmisionSoignantVueComponent,
    ToolbarMedComponent,
    OrthophonisteComponent
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
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
