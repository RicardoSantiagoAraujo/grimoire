import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatureComponent } from './creature/creature.component';
import { MenuComponent } from './menu/menu.component';
import { HomeConnectedComponent } from './home-connected/home-connected.component';
import { CompteComponent } from './compte/compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GrimoireComponent } from './grimoire/grimoire.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    CreatureComponent,
    MenuComponent,
    HomeConnectedComponent,
    CompteComponent,
    AccueilComponent,
    GrimoireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
