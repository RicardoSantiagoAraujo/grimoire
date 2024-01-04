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
selectedCreature!: Creature;
selectShow : boolean = false;
i:number=1;

  constructor(private creatureService: CreatureService){
  }
  ngOnInit(): void {
    this.creatureService.findAll().subscribe(
      (creatures) => {
        this.creatureList = creatures;
        this.selectedCreature = this.loadCreature();

      }
    );
  }

    
  loadCreature() : Creature {
    return this.creature = this.creatureList[this.num];
  }

  previous(): void {
    if (this.num < this.creatureList.length - 1) {
      this.num = this.creatureList.indexOf(this.selectedCreature);
      this.selectedCreature = this.loadCreature();
    }
  }

  next(): void {
    
    if (this.num < this.creatureList.length - 1) {
      this.num = this.creatureList.indexOf(this.selectedCreature)+1;
      this.selectedCreature = this.loadCreature();
    }
  }

}
