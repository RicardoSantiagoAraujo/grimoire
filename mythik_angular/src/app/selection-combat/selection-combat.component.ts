import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Combattant, Creature, IA } from '../model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;
  creatures?: Creature[]; 
  ia?: IA;
  combattant1?: Combattant | undefined; 
  combattant2?: Combattant | undefined; 

  constructor(private creatureService: CreatureService, private router: Router){
    this.load(); 
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
    this.creatures$.subscribe(resp => {this.creatures=resp})
    
  }

  list() {
    return this.creatures$;
  }

  // creationCombattant1(){
  //     this.combattant1.joueur = 

  // }
  
  // creationCombattant2(){
    
  //   let nb = Math.floor(Math.random() * (this.creatures!.length +1))
  //   this.combattant2!.creature = this.creatures![nb];
  //   this.combattant2!.joueur = this.ia; 


  // }

  goCombat(){
    //this.creationCombattant2(); 
    this.router.navigate(['/combat']);
   
  }

}
