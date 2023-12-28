import { Component, Input, OnInit } from '@angular/core';
import { CombatService } from './combat.service';
import { Combattant, Creature } from '../model';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit{
  
  combattants!: Combattant[];
  creature1!: Creature;
  creature2!: Creature;
  resultatCombat: string = '';
  @Input("combattant1") combattant1!: Combattant
  @Input("combattant2") combattant2!: Combattant
  

  constructor(private combatService: CombatService) {}

  ngOnInit(): void {
    this.combatService.getCombattants().subscribe((combattants) => {
      this.creature1 = combattants[0].creature!;
      this.creature2 = combattants[1].creature!;
    });
  }
  

  choixOrdinateur(): string {
    const choixPossibles = ['pierre', 'feuille', 'ciseaux'];
    const choixAleatoire = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[choixAleatoire];
  }

  jeu(choixJoueur:string):Number{
    const choixOrdinateur = this.choixOrdinateur();
    
    if (choixJoueur === choixOrdinateur) {
        return 0;
      } else if (
        (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux') ||
        (choixJoueur === 'feuille' && choixOrdinateur === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdinateur === 'feuille')
      ) {
        return 1;
      } else {
        return 2;
      }
  }
  
  degats (creature1: Creature, creature2: Creature) {

    let degat1 = creature1.attaque;
    let degat2 = creature2.attaque;
  
    if (creature1.typeElement === "eau" && creature2.typeElement === "feu" || creature1.typeElement === "feu" && creature2.typeElement === "air" || creature1.typeElement === "air" && creature2.typeElement === "terre" || creature1.typeElement === "terre" && creature2.typeElement === "eau") {
      degat1! *= 1.2;
      degat2! *= 0.85;
    }
  
    if (creature1.typeElement === "feu" && creature2.typeElement === "Eau"|| creature1.typeElement === "air" && creature2.typeElement === "feu" || creature1.typeElement === "terre" && creature2.typeElement === "air" || creature1.typeElement === "eau" && creature2.typeElement === "terre") {
      degat2! *= 1.2;
      degat1! *= 0.85;
    }
  
    return { degat1, degat2 };
}

combattre(creature1: Creature, creature2: Creature, choixJoueur: string): boolean {

    const degats = this.degats(creature1, creature2);


    while (creature1.pv! > 0 && creature2.pv! > 0) {
      const result = this.jeu(choixJoueur);
      if (result == 1) {
          creature2.pv! -= degats.degat1!;
      }

      if (result == 2) {
          creature1.pv! -= degats.degat2!;
      }

      if (creature2.pv! <= 0) {
          return this.combattants[0].gagnant = true;
      }

      if (creature1.pv! <= 0) {
        return this.combattants[1].gagnant = true;
      }
  }

  return this.combattants[0].gagnant = false, this.combattants[1].gagnant = true;
  
}
}


  
  


