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

const routes: Routes = [{path: "menu", component: MenuComponent},
  {path: "compte", component: CompteComponent,},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "creature", component: CreatureComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "menu", component: MenuComponent},
  {path: "grimoire", component: GrimoireComponent},
  {path: "selection-combat", component: SelectionCombatComponent},
  {path: "", pathMatch: "full", redirectTo: "menu"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
