import { Component } from '@angular/core';
import { CreatureService } from './creature.service';
import { Observable } from 'rxjs';
import { Creature } from '../model';

@Component({
  selector: 'creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent {

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

  edit(id?: number) {

  }

  remove(id?: number) {


  }
}
