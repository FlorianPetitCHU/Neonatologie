import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/contexte-familial/contexte-familial.component';
import { VaccinComponent } from './pages/vaccin/vaccin.component';
import { GrosssessePeriodeNeonatComponent } from './pages/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
import { CroissanceComponent } from './pages/croissance/croissance.component';
import { AtcdFamComponent } from './pages/atcd-fam/atcd-fam.component';
const routes: Routes = [
  {
    path: "home",
    component: IndexComponent
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
