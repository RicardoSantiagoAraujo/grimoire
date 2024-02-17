import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../model';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-creature-pages-content',
  templateUrl: './creature-pages-content.component.html',
  styleUrls: ['./creature-pages-content.component.css']
})
export class CreaturePagesContentComponent {

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
    if (this.num >0) {
      this.num = this.creatureList.indexOf(this.selectedCreature)-1;
      this.selectedCreature = this.loadCreature();
      AdjCreatureDisplay(this.selectedCreature)
    }
  }

  next(): void {

    if (this.num < this.creatureList.length -1) {
      this.num = this.creatureList.indexOf(this.selectedCreature)+1;
      this.selectedCreature = this.loadCreature();
      AdjCreatureDisplay(this.selectedCreature)
    }
  }

}


function AdjCreatureDisplay(selectedCreature: any){
  let creature = selectedCreature
  // console.log(creature)
  let element = creature.typeElement
  let mythology = creature.mythologie
  let pv = creature.pv
  let god = creature.dieu

  let colorScheme: string;
  switch (element) {
    case 'feu':
      colorScheme = "red"
      break;
    case 'air':
      colorScheme = "yellow"
      break;
    case 'eau':
      colorScheme = "blue"
        break;
    case 'terre':
      colorScheme = "brown"
      break;
    default:
      colorScheme = "black"
      ;
  }

  let pageFrame: string;
  switch (mythology) {
    case 'grec':
      pageFrame = "url(../../assets/flipbook-textures/greek_frame.png)"
      break;
    case 'chinoise':
      pageFrame = "url(../../assets/flipbook-textures/chinese_frame.png)"
      break;
    case 'nordique':
      pageFrame = "url(../../assets/flipbook-textures/nordic_frame.png)"
        break;
    case 'egyptienne':
      pageFrame = "url(../../assets/flipbook-textures/egyptian_frame.png)"
      break;
    default:
      pageFrame = "url(../../assets/flipbook-textures/nordic_frame.png)"
      ;
  }

  let fontStyle: string;
  if (god){
    fontStyle="rgb(153,101,21)"; // golden brown
  } else {
    fontStyle="black";
  }



  let pages  = document.querySelectorAll<HTMLElement>(".creaturePage");
  pages.forEach(page => {
    page.style.background = pageFrame;
    page.style.backgroundPosition = "center";
    page.style.backgroundRepeat = "no-repeat";
    page.style.backgroundSize = "100% 100%";
    page.classList.add("pageAnimation");
    setTimeout( // remove animation after X milisec. Suboptimal solution.
      function(){
      page.classList.remove("pageAnimation");
    }, 700);
    console.log(page);
  })

  document.querySelector<HTMLElement>(".memo .element")!.style.color=colorScheme;

  // if god
  console.log(god);
  console.log(fontStyle);
  document.querySelector<HTMLElement>(".nom")!.style.color=fontStyle;
}