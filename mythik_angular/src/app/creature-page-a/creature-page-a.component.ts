import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';

@Component({
  selector: 'app-creature-page-a',
  templateUrl: './creature-page-a.component.html',
  styleUrls: ['./creature-page-a.component.css']
})
export class CreaturePageAComponent {

creature?: Creature; 
  constructor(private creatureService: CreatureService){

    this.creatureService.findById(1).subscribe(resp => {this.creature=resp})
  }



}
