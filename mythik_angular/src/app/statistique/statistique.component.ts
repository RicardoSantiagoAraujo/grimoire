import { Component, OnInit } from '@angular/core';
import { CombatService } from '../combat/combat.service';
import { CombattantService } from '../selection-combat/combattant.service';
import { AuthService } from '../auth.service';
import { Combattant, Compte } from '../model';
import { CompteService } from '../compte/compte.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})

export class StatistiqueComponent implements OnInit{
  compte! : any; 
  combattants! : Observable <Combattant []>;
  mesParties : boolean = false;
  IAParties : boolean = false;
  id!:number;

  constructor(private combattantService: CombattantService, private compteService: CompteService, private authService: AuthService) {
  }

  ngOnInit(): void {
   
    this.compte = this.authService.getCompte();
    
  }

  mesparties () {
    this.mesParties = true;
    this.IAParties = false;
  }

  IAparties(){
    this.mesParties = false;
    this.IAParties = true;
  }

  getStatJoueur () {
    this.combattants = this.combattantService.findByCompte(this.authService.getCompte());
    console.log(this.combattants)
    return this.combattants
  }

  getStatIA () {
    this.compte = this.compteService.findIA();
    return this.combattantService.findByCompte();
  }
}
