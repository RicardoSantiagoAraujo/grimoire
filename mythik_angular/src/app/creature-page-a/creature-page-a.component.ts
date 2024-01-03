import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creature-page-a',
  templateUrl: './creature-page-a.component.html',
  styleUrls: ['./creature-page-a.component.css']
})
export class CreaturePageAComponent {

creatures$!: Observable<Creature[]>; 
creature!:Creature;
creatureId: number = 0;


  constructor(private creatureService: CreatureService){
  }
  ngOnInit(): void {
    this.loadCreature();
  }

  
  list() {
    this.creatures$ = this.creatureService.findAll();
    return this.creatures$;
  }

  loadCreature(): void {
    this.creatureService.findById(this.creatureId).subscribe(
      (resp) => {
        this.creature = resp;
      });
  }

  previous(): void {
    this.creatureId--;
    this.loadCreature();
  }

  next(): void {
    this.creatureId++;
    this.loadCreature();
  }

}
