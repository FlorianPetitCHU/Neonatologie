import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { IndexComponent } from './pages/index/index.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { RecueilDeDonnesPiedatriquesComponent } from './pages/recueil-de-donnes-piedatriques/recueil-de-donnes-piedatriques.component';
import { ContexteFamilialComponent } from './pages/contexte-familial/contexte-familial.component';
import { AtcdFamComponent } from './pages/atcd-fam/atcd-fam.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IndexComponent,
    RecueilDeDonnesPiedatriquesComponent,
    ContexteFamilialComponent,
    AtcdFamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
