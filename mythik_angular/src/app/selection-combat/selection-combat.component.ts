import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;

  constructor(private creatureService: CreatureService){
    this.load(); 
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
  }

  list() {
    return this.creatures$;
  }

}
