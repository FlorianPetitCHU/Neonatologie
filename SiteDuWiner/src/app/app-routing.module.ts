import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/contexte-familial/contexte-familial.component';

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
    path: "contexteFamilial",
    component: ContexteFamilialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
