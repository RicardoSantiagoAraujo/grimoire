import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [{path: "menu", component: MenuComponent},
  {path: "compte", component: CompteComponent, canActivate: [AuthGuard]},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "", pathMatch: "full", redirectTo: "menu"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
