import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Combattant, Creature } from '../model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;
  combattant1?: Combattant; 
  combattant2?: Combattant; 

  constructor(private creatureService: CreatureService, private router: Router){
    this.load(); 
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
  }

  list() {
    return this.creatures$;
  }

  creationCombattant1(){


  }
  /*
  creationCombattant2(){
    let nb = Math.floor(Math.random() * (this.creatures$.subscribe(resp=> {resp.size()})))

    
  }
*/
  goCombat(){

    this.router.navigate(['/combat']);
  }

}
