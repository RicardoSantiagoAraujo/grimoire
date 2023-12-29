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
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [{path: "menu", component: MenuComponent},
  {path: "compte", component: CompteComponent,},
  {path: "admin", component: AdminComponent},
  {path: "humain", component: HumainComponent},
  {path: "ia", component: IAComponent},
  {path: "joueur", component: JoueurComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "creature", component: CreatureComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "menu", component: MenuComponent},
  {path: "grimoire", component: GrimoireComponent},
  {path: "selection-combat", component: SelectionCombatComponent},
  {path: "combat", component: CombatComponent},
  {path: "statistique", component: StatistiqueComponent},
  {path: "", pathMatch: "full", redirectTo: "menu"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
