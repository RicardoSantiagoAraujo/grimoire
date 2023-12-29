import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Combattant, Compte, Creature} from '../model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CombattantService } from './combattant.service';
import { CompteService } from '../compte/compte.service';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;
  creatures?: Creature[]; 
  Ia$!: Observable<Compte>; 
  Ia?: Compte; 

  ready: boolean = false;
  creationCombattant: boolean = true; 
  
  combattant1!: Combattant; 
  combattant2!: Combattant; 

  constructor(private creatureService: CreatureService, private router: Router, private authService: AuthService, private combattantService: CombattantService, private compteService: CompteService){
    this.load(); 
    this.combattant1 = new Combattant(); 
    this.combattant2 = new Combattant(); 
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
    this.creatures$.subscribe(resp => {this.creatures=resp})
    this.Ia$ = this.compteService.findIA(); 
    this.Ia$.subscribe(resp => {this.Ia=resp});
   
  }

  list() {
    return this.creatures$;
  }

  creationCombattant1(creature : Creature){

    this.combattant1.compte = this.authService.getCompte();
    this.combattant1.creature = creature;
    //this.combattantService.save(this.combattant1).subscribe(resp => {this.combattant1}); 

  }

  creationCombattant2(){
    
    let nb = Math.floor(Math.random() * (this.creatures!.length +1))
    this.combattant2!.creature = this.creatures![nb];
    this.combattant2!.compte = this.Ia; 
    console.log(this.Ia);
    console.log(this.combattant2);
    //this.combattantService.save(this.combattant2).subscribe(resp => {this.combattant2}); 
  }

  goCombat(){
    
    this.ready = true; 
    this.creationCombattant = false; 
   
  }

}
