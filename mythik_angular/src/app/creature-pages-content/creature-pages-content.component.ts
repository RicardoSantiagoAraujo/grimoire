import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-creature-pages-content',
  templateUrl: './creature-pages-content.component.html',
  styleUrls: ['./creature-pages-content.component.css']
})
export class CreaturePagesContentComponent implements OnInit {

creatures$!: Observable<Creature[]>;
creatureList: Creature[] = [];
creature!:Creature;
num: number = 0;
selectedCreature!: Creature;
@Output() CreatureEvent = new EventEmitter<Creature>();
selectShow : boolean = false;
i:number=1;

  constructor(private creatureService: CreatureService){
  }

  ngOnInit(): void {
    this.creatureService.findAll().subscribe(
      (creatures) => {
        this.creatureList = creatures;
        this.selectedCreature = this.loadCreature();

        // Trigger emit right at the beginning
        console.log(this.selectedCreature);
        this.emitSelectedCreature(this.selectedCreature);

        setTimeout(()=>{
        this.AdjCreatureDisplay(this.selectedCreature);
        }, 1000) // suboptimal way to ensure component loaded already on DOM
      }
    );
  }




  loadCreature() : Creature {
    return this.creature = this.creatureList[this.num];
  }

  previous(): void {
    if (this.num >0) {
      this.num = this.creatureList.indexOf(this.selectedCreature)-1;
      this.selectedCreature = this.loadCreature();
      this.AdjCreatureDisplay(this.selectedCreature);
      this.emitSelectedCreature(this.selectedCreature)
    }
  }

  next(): void {

    if (this.num < this.creatureList.length -1) {
      this.num = this.creatureList.indexOf(this.selectedCreature)+1;
      this.selectedCreature = this.loadCreature();
      this.AdjCreatureDisplay(this.selectedCreature)
      this.emitSelectedCreature(this.selectedCreature)
    }
  }

  emitSelectedCreature(value: Creature) {
    this.CreatureEvent.emit(value);
  }


  AdjCreatureDisplay(selectedCreature: any){
    let creature = selectedCreature
    // console.log(creature)
    // let element = creature.typeElement
    let mythology = creature.mythologie
    // let pv = creature.pv
    // let god = creature.dieu

    // find max values of attack and pv in grimoire
    let max_attack = 0;
    let max_pv = 0;
    for (creature in this.creatureList){
      let attack = this.creatureList[creature].attaque!;
      let pv = this.creatureList[creature].pv!;
      if (max_attack < attack){
        max_attack = attack
      }
      if (max_pv < pv){
        max_pv = pv
      }
    }

    // console.log("MAX PV: " + max_pv)
    // console.log("MAX ATTACK: " + max_attack)
    // Set max attack and pv as CSS variables
    // document.querySelector<HTMLElement>(':root')!.style.setProperty('--max_attack', String(max_attack));
    // document.querySelector<HTMLElement>(':root')!.style.setProperty('--max_pv', String(max_pv));
    let attack_ratio = selectedCreature.attaque/max_attack;
    let pv_ratio = selectedCreature.pv/max_pv;


      document.querySelector<HTMLElement>(".memo #attack span")!.style.textShadow=`0 0 5px rgba(0,0,0, ${attack_ratio}), 0 0 1px rgba(0,0,0, ${attack_ratio})`;
      document.querySelector<HTMLElement>(".memo #attack span")!.style.filter=`saturate(${attack_ratio})brightness(${attack_ratio})`;
      document.querySelector<HTMLElement>(".memo #pv span")!.style.textShadow=`0 0 5px rgba(0,0,0, ${pv_ratio}), 0 0 1px rgba(0,0,0, ${pv_ratio})`;
      document.querySelector<HTMLElement>(".memo #pv span")!.style.filter=`saturate(${pv_ratio})brightness(${pv_ratio})`;

      // ENSURE CREATURE NUMBER IS UPDATED FOR PROPER BUTTON FUNCTIONALITY
      this.num = this.creatureList.indexOf(this.selectedCreature);

      // ANIMATION ON PAGE SWITCH
    let pages  = document.querySelectorAll<HTMLElement>(".creaturePage");
    pages.forEach(page => {
      page.classList.add("pageAnimation");
      setTimeout( // remove animation after X milisec. Suboptimal solution.
        function(){
        page.classList.remove("pageAnimation");
      }, 700);
      console.log(page);
    })

    // Animate text appearance
    setTimeout(()=>{
      this.textAnimation(20)
    },100); // small delay removes errors
  }


  textAnimation(interval: number){
    // start at character:
    let letter_n = 0;
    // get text container
    let target = document.querySelector<HTMLElement>(".descript")!;
    // get text to be animated
    let text = this.selectedCreature.description!;
    // empty text container
    target.innerHTML = "";
    // add one letter at a time, until text is complete
    let loop = setInterval(()=>{
      // add each new letter as a span to be able to animate them
      var new_letter = document.createElement('span');
      new_letter.innerHTML = text[letter_n];
      // ==== ANIMATE LETTERS AS THEY APPEAR //
      new_letter.style.opacity= "0";
      // new_letter.style.color= "purple"; // set in CSS by element
      // new_letter.style.textShadow= "0px 0px 10px black";
      new_letter.style.transition= "2.5s";
      setTimeout(()=>{
        new_letter.style.opacity= "1";
        new_letter.style.color= "black";
        new_letter.style.textShadow= "0px 0px 0px black";
      }
      , 500);
      // ==== ANIMATION CODE END //

      new_letter.style.animation= "letterAppear 100s forwards";
      target.appendChild(new_letter);
      letter_n++;
      if (letter_n >= text.length || text != this.selectedCreature.description! ){
        clearInterval(loop) // stop interval once text is complete OR creature changes
      }
    },interval);
  }
}
