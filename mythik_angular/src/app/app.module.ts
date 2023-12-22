import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatureComponent } from './creature/creature.component';
import { MenuComponent } from './menu/menu.component';
import { CompteComponent } from './compte/compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GrimoireComponent } from './grimoire/grimoire.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectionCombatComponent } from './selection-combat/selection-combat.component';
import { IAComponent } from './ia/ia.component';
import { HumainComponent } from './humain/humain.component';
import { JoueurComponent } from './joueur/joueur.component';
import { AdminComponent } from './admin/admin.component';
import { CombatComponent } from './combat/combat.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    CreatureComponent,
    MenuComponent,
    CompteComponent,
    AccueilComponent,
    GrimoireComponent,
    ConnexionComponent,
    SelectionCombatComponent,
    IAComponent,
    HumainComponent,
    JoueurComponent,
    AdminComponent,
    CombatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
