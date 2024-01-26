import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Combattant, Compte, Creature} from '../model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CombattantService } from './combattant.service';
import { CompteService } from '../compte/compte.service';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;
  creatures?: Creature[];
  Ia$!: Observable<Compte>;
  Ia?: Compte;

  ready: boolean = false;
  creationCombattant: boolean = true;

  combattant1!: Combattant;
  combattant2!: Combattant;
  cb1: boolean = false;
  cb2: boolean = false;

  constructor(private creatureService: CreatureService, private router: Router, private authService: AuthService, private combattantService: CombattantService, private compteService: CompteService){
    this.load();
    this.combattant1 = new Combattant();
    this.combattant2 = new Combattant();
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
    this.creatures$.subscribe(resp => {this.creatures=resp})
    this.Ia$ = this.compteService.findIA();
    this.Ia$.subscribe(resp => {this.Ia=resp});

  }

  list() {
    return this.creatures$;
  }

  creationCombattant1(creature : Creature){

    this.combattant1.compte = this.authService.getCompte();
    this.combattant1.creature = creature;
    this.cb1 = true;

    const player =document.querySelector(".player");
    console.log(player);
    player!.classList.remove("combattantAppear");
    setTimeout(() => {
      player!.classList.add('combattantAppear');
    }, 0);
    this.activateBook()
  }

  creationCombattant2(){

    let nb = Math.floor(Math.random() * (this.creatures!.length))
    this.combattant2!.creature = this.creatures![nb];
    this.combattant2!.compte = this.Ia;
    console.log(this.Ia);
    console.log(this.combattant2);
    this.cb2=true;

    const adv =document.querySelector(".adv");
    console.log(adv);
    adv!.classList.remove("combattantAppear");
    setTimeout(() => {
      adv!.classList.add('combattantAppear');
    }, 0);
    this.activateBook()
  }

  // turn on book effects upon interaction
  activateBook(){
    // If EITHER combatent is chosen
    if(this.combattant1.creature != null || this.combattant2.creature != null){
    let book = document.querySelector<HTMLBodyElement>("#book_deco");
    book?.classList.add("activeBookFirst");
    }
    // If BOTH combatents are chosen
    if(this.combattant1.creature != null && this.combattant2.creature != null){
    let book = document.querySelector<HTMLBodyElement>("#book_deco");
    book?.classList.add("activeBookSecond");
    }
  }

  goCombat(){
    let book = document.querySelector<HTMLBodyElement>("#book_deco");
    book?.classList.add("activeBookGo");
    setTimeout(() => {
    this.ready = true;
    this.creationCombattant = false;
    }, 200);

  }

}
