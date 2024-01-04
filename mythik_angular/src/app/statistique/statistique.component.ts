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
  compteIA! : Compte;
  combattants! : Combattant [];
  mesParties : boolean = true;
  IAParties : boolean = false;
  id!:number;

  constructor(private combattantService: CombattantService, private compteService: CompteService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.compte = this.authService.getCompte();
    this.compteService.findIA().subscribe (resp=>{
      this.compteIA = resp;
    });

  }

  mesparties () {
    this.mesParties = true;
    this.IAParties = false;
    this.combattantService.findByCompteId(this.compte.id).subscribe (resp =>{
      this.combattants = resp
    });
  }

  IAparties(){
    this.mesParties = false;
    this.IAParties = true;
    this.combattantService.findByCompteId(this.compteIA.id).subscribe (resp =>{
      this.combattants = resp
    });
  }
  
}
