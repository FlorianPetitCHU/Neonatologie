import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/medecin/Admission/Admission.component';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/soignant/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/soignant/contexte-familial/contexte-familial.component';
import { VaccinComponent } from './pages/medecin/vaccin/vaccin.component';
import { GrosssessePeriodeNeonatComponent } from './pages/medecin/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
import { CroissanceComponent } from './pages/soignant/croissance/croissance.component';
import { AtcdFamComponent } from './pages/medecin/atcd-fam/atcd-fam.component';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';
import { DialogSignerComponent } from './pages/autre/dialog-signer/dialog-signer.component';
import { SortieComponent } from './pages/medecin/sortie/sortie.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';
import { PrepaSortieComponent } from './pages/autre/prepa-sortie/prepa-sortie.component';
import { AssistSocialComponent } from './pages/autre/assist-social/assist-social.component';
import { KinesComponent } from './pages/soignant/kines/kines.component';
import { AcceuilComponent } from './pages/Acceuil/Acceuil.component';
import { AutorisationDeSoinComponent } from './pages/soignant/autorisation-de-soin/autorisation-de-soin.component';
import { AdmisionSoignantVueComponent } from './pages/soignant/admision-soignant-vue/admision-soignant-vue.component';
import { MedecinComponent } from './pages/BtCreer/Medecin/medecin.component';
import { SoignantComponent } from './pages/BtCreer/Soignant/soignant.component';
import { LogMedecinComponent } from './pages/Connexion/Medecin/medecin.component';
import { LogSoignantComponent } from './pages/Connexion/Soignant/soignant.component';
import { OrthophonisteComponent } from './pages/soignant/orthophoniste/orthophoniste.component';
import { KineEtOrtoComponent } from './pages/soignant/kine-et-orto/kine-et-orto.component';
const routes: Routes = [
  {
    path: "Admission",
    component: AdmissionComponent
  },  {
    path: "KineEtOrto",
    component: KineEtOrtoComponent
  },
  {
    path: "Orthophoniste",
    component: OrthophonisteComponent
  },
  {
    path: "LOGIDE",
    component: LogSoignantComponent
  },
  {
    path: "LOGMED",
    component: LogMedecinComponent
  },
  {
    path: "TDB MED",
    component: MedecinComponent
  },
  {
    path: "TDB",
    component: SoignantComponent
  },
  {
    path: "AdmissionSoignant",
    component: AdmisionSoignantVueComponent
  },
  {
    path: "AutoSoins",
    component: AutorisationDeSoinComponent
  },
    {
    path: "kines",
    component: KinesComponent
  },
  {
    path: "",
    component: AcceuilComponent
  },
  {
    path: "AssistanteSociale",
    component: AssistSocialComponent
  },
  {
    path: "PreparationALaSortie",
    component: PrepaSortieComponent
  },
  {
    path: "EvolutionMedical",
    component: EvolMedComponent
  },
  {
    path: "Sortie",
    component: SortieComponent
  },
  {
    path: "Signer",
    component: DialogSignerComponent
  },
  {
    path: "ExamenCliniqueInitial",
    component: ExamInitialComponent
  },
  {
    path: "recueilDeDonnesPiedatriquesComponent",
    component: RecueilDeDonnesPiedatriquesComponent
  },
  {
    path: "atcdFam",
    component: AtcdFamComponent
  },
  {
    path: "contexteFamilial",
    component: ContexteFamilialComponent
  },
  {
    path: "vaccin",
    component: VaccinComponent
  },
  {
    path: "grosssessePeriodeNeonat",
    component: GrosssessePeriodeNeonatComponent
  },
  {
    path: "croissance",
    component: CroissanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
