import { Component } from '@angular/core';
import { CombatService } from '../combat/combat.service';
import { CombattantService } from '../selection-combat/combattant.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {

  constructor(private combattantService: CombattantService) {}

  getStatJoueur () {

  }

  getStatIA () {

  }

  
}
