import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { MenuComponent } from './menu/menu.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreatureComponent } from './creature/creature.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GrimoireComponent } from './grimoire/grimoire.component';
import { SelectionCombatComponent } from './selection-combat/selection-combat.component';
import { AdminComponent } from './admin/admin.component';
import { HumainComponent } from './humain/humain.component';
import { IAComponent } from './ia/ia.component';
import { JoueurComponent } from './joueur/joueur.component';
import { CombatComponent } from './combat/combat.component';
import { DesktopComponent } from './desktop/desktop.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { CreaturePageAComponent } from './creature-page-a/creature-page-a.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { delayPageResolver } from './delay-page.resolver';

const routes: Routes = [
  {
    path: "menu",
    title: "Landing page",
    component: MenuComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "compte",
    component: CompteComponent,
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "humain",
    component: HumainComponent
  },
  {
    path: "ia",
    component: IAComponent
  },
  {
    path: "joueur",
    component: JoueurComponent
  },
  {
    path: "connexion",
    title: "Page de connexion",
    component: ConnexionComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "inscription",
    component: InscriptionComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "creature",
    component: CreatureComponent
  },
  {
    path: "accueil",
    title: "Main hub",
    component: AccueilComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "accueil/intro", // accueil screen reserved for connection transition
    title: "Main hub",
    component: AccueilComponent,
    resolve: [delayPageResolver],
    data: { delay: '1000'}
  },
  {
    path: "grimoire",
    title: "Page flipbook grimoire mythologique",
    component: DesktopComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "combat",
    component: SelectionCombatComponent
  },
  {
    path: "creaturea",
    component: CreaturePageAComponent
  },
  {
    path: "statistique",
    title: "Statistique de combar",
    component: StatistiqueComponent
  },
  { // redirect route
    path: "", pathMatch:
      "full", redirectTo: "menu"
  },
  {
    path: '**',
    title: "Page error 404",
    component: PageNotFoundComponent
  } //wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
