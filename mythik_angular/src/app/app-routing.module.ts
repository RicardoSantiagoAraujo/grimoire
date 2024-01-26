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
    title: "Connexion / Inscription",
    component: MenuComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "compte",
    title: "Gestion de comptes",
    component: CompteComponent,
    resolve: [delayPageResolver],
    data: { delay: '500'}
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
    title: "Page de inscription",
    component: InscriptionComponent,
    resolve: [delayPageResolver]
  },
  {
    path: "creature",
    title: "Gestion de creatures",
    component: CreatureComponent,
    resolve: [delayPageResolver],
    data: { delay: '500'}
  },
  {
    path: "accueil",
    title: "Accueil Mythik",
    component: AccueilComponent,
    resolve: [delayPageResolver],
    data: { delay: '500'}
  },
  {
    path: "accueil/intro", // accueil screen reserved for connection transition
    title: "Accueil Mythik",
    component: AccueilComponent,
    resolve: [delayPageResolver],
    data: { delay: '1000'}
  },
  {
    path: "grimoire",
    title: "Grimoire mythologique",
    component: DesktopComponent,
    resolve: [delayPageResolver],
    data: { delay: '500'}
  },
  {
    path: "combat",
    title: "Combat",
    component: SelectionCombatComponent,
    resolve: [delayPageResolver],
    data: { delay: '500'}
  },
  {
    path: "creaturea",
    component: CreaturePageAComponent
  },
  {
    path: "statistique",
    title: "Statistique de combat",
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
