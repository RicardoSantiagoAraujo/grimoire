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

import { CombatComponent } from './combat/combat.component';
import { DieuPipe } from './dieu.pipe';
import { CreaturePagesContentComponent } from './creature-pages-content/creature-pages-content.component';
import { DesktopComponent } from './desktop/desktop.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FlipBookModule } from '@labsforge/flipbook';
import { ChainsComponent } from './chains/chains.component';
import { MythologiePipe } from './mythologie.pipe';
import { GagnantPipe } from './gagnant.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreatureDataPipe } from './creature-data.pipe';
import { CombattanteDataPipe } from './combattant-data.pipe';
import { AudioService } from './audio.service';
import { AudioToggleComponent } from './audio-toggle/audio-toggle.component';
import { ReduceImagePipe } from './reduce-image.pipe';





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
    CombatComponent,
    DesktopComponent,
    CreaturePagesContentComponent,
    DieuPipe,
    StatistiqueComponent,
    ChainsComponent,
    MythologiePipe,
    GagnantPipe,
    PageNotFoundComponent,
    CreatureDataPipe,
    CombattanteDataPipe,
    AudioToggleComponent,
    ReduceImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlipBookModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
