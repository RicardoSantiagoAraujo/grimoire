import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-creature-page-a',
  templateUrl: './creature-page-a.component.html',
  styleUrls: ['./creature-page-a.component.css']
})
export class CreaturePageAComponent {

creatures$!: Observable<Creature[]>;
creatureList: Creature[] = [];
creature!:Creature;
num: number =0;

  constructor(private creatureService: CreatureService){
  }
  ngOnInit(): void {
    this.creatureService.findAll().subscribe(
      (creatures) => {
        this.creatureList = creatures;
        this.loadCreature(this.num);
      }
    );
  }

    
  loadCreature(num: number): void {
    this.creature = this.creatureList[num];
  }

  previous(): void {
    this.num--;
    this.loadCreature(this.num);
  }

  next(): void {
    this.num++;
    this.loadCreature(this.num);
  }

}
