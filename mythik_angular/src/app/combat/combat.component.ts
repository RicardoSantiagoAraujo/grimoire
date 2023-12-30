import { Component, Input, OnInit } from '@angular/core';
import { CombatService } from './combat.service';
import { Combat, Combattant, Creature } from '../model';
import { Router } from '@angular/router';
import { CombattantService } from '../selection-combat/combattant.service';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit{
  
  id! : number;
  combat$!: Observable<Combat[]>;
  combattants!: Combattant[];
  creature1!: Creature;
  creature2!: Creature;
  resultatCombat!: string;
  combatTermine = false;
  result: number | null = null;
  choixJoueur!: string;
  choixOrdi!: string;

  @Input("combattant1") combattant1!: Combattant; 
  @Input("combattant2") combattant2!: Combattant; 
  

constructor(private combatService: CombatService, private combattantService: CombattantService, private router: Router) {}

  ngOnInit(): void {
    this.creature1 = this.combattant1.creature!;
    this.creature2 = this.combattant2.creature!;
  }
  
  load() {
    this.combat$ = this.combatService.findAll();
  }

  list() {
    return this.combat$;
  }

  save() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd'); // Format ISO 8601
  const formattedTime = format(currentDate, 'HH:mm:ss'); // Format 24 heures
  
  const combat: Combat = {
    dateCombat: formattedDate,
    heureCombat: formattedTime,
    combattants: [this.combattant1, this.combattant2]
  };

  this.combattant1.combat = combat;
  this.combattant2.combat = combat;

  console.log(this.combattant1)

  this.combattantService.save(this.combattant1).subscribe(resp =>{});
  this.combattantService.save(this.combattant2).subscribe(resp =>{});
}
    

  choixOrdinateur(): string {
    const choixPossibles = ['pierre', 'feuille', 'ciseaux'];
    const choixAleatoire = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[choixAleatoire];
  }

  jeu(choixJoueur:string):Number{
    this.choixOrdi = this.choixOrdinateur();
    console.log(this.choixOrdi);
    
    if (choixJoueur === this.choixOrdi) {
        return 0;
      } 
      
    else if (
        (choixJoueur === 'pierre' && this.choixOrdi === 'ciseaux') ||
        (choixJoueur === 'feuille' && this.choixOrdi === 'pierre') ||
        (choixJoueur === 'ciseaux' && this.choixOrdi === 'feuille')
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

  combattre(choixJoueur: string) {

    const result = this.jeu(choixJoueur);

    if (result === 1) {
      const degats = this.degats(this.creature1, this.creature2);
      this.creature2.pv! -= degats.degat1!;
    } 
    
    if (result === 2) {
      const degats = this.degats(this.creature2, this.creature1);
      this.creature1.pv! -= degats.degat2!;
    }

    if (this.creature2.pv! <= 0) {
      this.resultatCombat = this.creature1.nom!;
      
      this.combattant1.gagnant = true;
      this.combattant2.gagnant = false;


      this.save();
      this.combatTermine = true;
   }

   if (this.creature1.pv! <= 0) {
    this.resultatCombat = this.creature2.nom!;

    this.combattant1.gagnant = false; 
    this.combattant2.gagnant = true;

    
    this.save(); 
    this.combatTermine = true;
    }

  }

  mancheSuivante() {
    this.result = null;
    this.choixJoueur = '';
    this.choixOrdi = '';
  }

  nouvellePartie() {
    window.location.reload();
  }

  statistiques() {
    this.router.navigate(['/statistique']);
  }

  retour() {
    this.router.navigate(['/accueil']);
  }
}