import { Component, Input, OnInit } from '@angular/core';
import { CombatService } from './combat.service';
import { Combat, Combattant, Creature } from '../model';
import { Router } from '@angular/router';
import { CombattantService } from '../selection-combat/combattant.service';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  id!: number;
  combat$!: Observable<Combat[]>;
  combattants!: Combattant[];
  creature1!: Creature;
  creature2!: Creature;
  resultatCombat!: string;
  combatTermine = false;
  result: number | null = null;
  choixJoueur!: string;
  choixOrdi!: string;
  debut: boolean = true;
  animation_duration: string = "0.5s";
  animation_duration_last: string = "3s";


  @Input("combattant1") combattant1!: Combattant;
  @Input("combattant2") combattant2!: Combattant;
  vieRestant1!: number;
  vieRestant2!: number;
  pvtoto1?: number;
  pvtoto2?: number;
  affichage?: string[];
  resultat?: string;

  constructor(private combatService: CombatService, private combattantService: CombattantService, private router: Router,
    public audioService: AudioService) {


  }

  ngOnInit(): void {
    this.creature1 = this.combattant1.creature!;
    this.creature2 = this.combattant2.creature!;



  }

  ngAfterViewInit() {

    this.pvtoto1 = this.combattant1.creature!.pv;
    this.pvtoto2 = this.combattant2.creature!.pv;
    this.debut = false;

  }
  ngAfterContentInit() {
    this.barreVie();
  }


  saveCombat() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd'); // Format ISO 8601
    const formattedTime = format(currentDate, 'HH:mm:ss'); // Format 24 heures

    const combat: Combat = {
      dateCombat: formattedDate,
      heureCombat: formattedTime,
      combattants: [this.combattant1, this.combattant2]
    };

    // Enregistrement du combat avec les combattants
    this.combatService.save(combat).subscribe(
      (combatSaved) => {
        console.log('Combat enregistré avec succès !');
        this.combattant1.combat = combatSaved;
        this.combattant2.combat = combatSaved;

        // Enregistrement des combattants
        this.combattantService.save(this.combattant1).subscribe(
          (combattant1Saved) => {
            console.log('Combattant 1 enregistré avec succès !');

            // Enregistrement du deuxième combattant
            this.combattantService.save(this.combattant2).subscribe(
              (combattant2Saved) => {
                console.log('Combattant 2 enregistré avec succès !');
              },
            );
          },
        );
      }
    );
  }


  choixOrdinateur(): string {
    const choixPossibles = ['pierre', 'feuille', 'ciseaux'];
    const choixAleatoire = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[choixAleatoire];
  }

  jeu(choixJoueur: string): Number {
    this.choixOrdi = this.choixOrdinateur();
    console.log(this.choixOrdi);

    if (choixJoueur === this.choixOrdi) { // 0 if round is a tie
      this.afficheDegats(0, 0);
      return 0;
    }

    else if (
      (choixJoueur === 'pierre' && this.choixOrdi === 'ciseaux') ||
      (choixJoueur === 'feuille' && this.choixOrdi === 'pierre') ||
      (choixJoueur === 'ciseaux' && this.choixOrdi === 'feuille')
    ) {
      return 1; // 1 if player wins round
    } else {
      return 2; // 2 if player loses round
    }
  }

  degats(creature1: Creature, creature2: Creature) {
    let dmg_multiplier = 3;

    let degat1 = creature1.attaque! * dmg_multiplier;
    let degat2 = creature2.attaque! * dmg_multiplier;

    if (creature1.typeElement === "eau" && creature2.typeElement === "feu" || creature1.typeElement === "feu" && creature2.typeElement === "air" || creature1.typeElement === "air" && creature2.typeElement === "terre" || creature1.typeElement === "terre" && creature2.typeElement === "eau") {
      degat1! *= 1.2;
      degat2! *= 0.85;
    }

    if (creature1.typeElement === "feu" && creature2.typeElement === "Eau" || creature1.typeElement === "air" && creature2.typeElement === "feu" || creature1.typeElement === "terre" && creature2.typeElement === "air" || creature1.typeElement === "eau" && creature2.typeElement === "terre") {
      degat2! *= 1.2;
      degat1! *= 0.85;
    }

    return { degat1, degat2 };
  }
  setChoices(choixJoueur: string) {
    document.querySelector("#player_choice span")!.innerHTML = choixJoueur;
    document.querySelector("#adv_choice span")!.innerHTML = this.choixOrdi;

    document.querySelectorAll<HTMLBodyElement>(".choice").forEach(
      (choice) => {
        choice.classList.remove("choiceAnimation");
        setTimeout(() => {
          choice.classList.add('choiceAnimation');
        }, 0);
      })

    let suiviCombat = document.querySelector<HTMLBodyElement>(".suivi_conteneur")!;
    suiviCombat.classList.remove("suiviAnimation");
    setTimeout(() => {
      suiviCombat.classList.add('suiviAnimation');
    }, 0);

  }


  setRoundResults(result: Number) {
    let player = document.querySelector<HTMLBodyElement>(".player")!;
    let adv = document.querySelector<HTMLBodyElement>(".adv")!;

    if (result == 1) { // if player wins round
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      setTimeout(() => {
        let animation_duration;
        if (this.creature1.pv! > 0 && this.creature2.pv! > 0) { // animation if NOT final strike
          animation_duration = this.animation_duration;
        } else { // animation IF final strike
          animation_duration = this.animation_duration_last;
        }
        document.documentElement.style.setProperty("--time-to-impact", animation_duration);
        player.classList.add('round_winner');
        adv.classList.add('round_loser');
      }, 0);
    }

    if (result == 2) { // if player loses round
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      setTimeout(() => {
        let animation_duration;
        if (this.creature1.pv! > 0 && this.creature2.pv! > 0) { // animation if NOT final strike
          animation_duration = "0.5s";
        } else { // animation IF final strike
          animation_duration = "2s";
          console.log("last attack!")
        }
        document.documentElement.style.setProperty("--time-to-impact", animation_duration);
        player.classList.add('round_loser');
        adv.classList.add('round_winner');
      }, 0);
    }

    if (result == 0) { // if round is a tie
      let player = document.querySelector<HTMLBodyElement>(".player")!;
      let adv = document.querySelector<HTMLBodyElement>(".adv")!;
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      this.audioService.playTension(0.5);
      setTimeout(() => {
        player.classList.add('round_tie');
        adv.classList.add('round_tie');
      }, 0);
    }
  }


  combattre(choixJoueur: string) {
    this.audioService.playChime(0.1);

    const result = this.jeu(choixJoueur);
    this.setChoices(choixJoueur);

    this.setRoundResults(result);

    if (result === 1) {

      const degats = this.degats(this.creature1, this.creature2);
      this.creature2.pv! -= degats.degat1!;
      this.barreVie();
      this.afficheDegats(1, degats.degat1!);

      // sound effects
      this.roundSounds("player");

    }

    if (result === 2) {
      const degats = this.degats(this.creature1, this.creature2);
      this.creature1.pv! -= degats.degat2!;
      this.barreVie();
      this.afficheDegats(2, degats.degat2!);

      // sound effects
      this.roundSounds("adv");
    }

    // this.arenaRotationAccelerate()
    this.bgColorShift();
    this.arenaOpacity();

    if (this.creature2.pv! <= 0 || this.creature1.pv! <= 0) { // if either runs out of life (combat over)
      this.audioService.playGong(1);
    }

    if (this.creature2.pv! <= 0) { // player wins
      this.resultatCombat = this.creature1.nom!;
      document.querySelector<HTMLElement>("#combat_winner div")!.classList.add("combat_winner_animation");
      document.querySelector<HTMLElement>("#combat_winner div")!.style.backgroundImage = `url(${this.creature1.image!})`;
      document.documentElement.style.setProperty("--winner_color", this.element_to_color(this.creature1.typeElement!));
      this.creature2.pv = 0;
      this.barreVie();
      this.combattant1.gagnant = true;
      this.combattant2.gagnant = false;

      this.saveCombat();
      this.combatTermine = true;
      this.audioService.switchCombatSelectionTheme(true, 0); // mute by reducing volume
      this.audioService.switchResultTheme("victory", true, 1);
    }

    if (this.creature1.pv! <= 0) { // player loses
      this.resultatCombat = this.creature2.nom!;
      document.querySelector<HTMLElement>("#combat_winner div")!.classList.add("combat_winner_animation");
      document.querySelector<HTMLElement>("#combat_winner div")!.style.backgroundImage = `url(${this.creature2.image!})`;
      document.documentElement.style.setProperty("--winner_color", this.element_to_color(this.creature2.typeElement!));
      this.creature1.pv = 0;
      this.barreVie();
      this.combattant1.gagnant = false;
      this.combattant2.gagnant = true;
      this.saveCombat();
      this.combatTermine = true;
      this.audioService.switchCombatSelectionTheme(true, 0); // mute by reducing volume
      this.audioService.switchResultTheme("defeat", true, 1);
    }

  }

  element_to_color(element: string) {
    console.log(element)
    if (element == "feu") {
      return "darkred"
    }
    if (element == "eau") {
      return "cyan"
    }
    if (element == "air") {
      return "grey"
    }
    if (element == "terre") {
      return "forestgreen"
    }
    return "black"
  }

  afficheDegats(result: number, degat: number) {
    let victim;
    let attacker;
    if (result == 1) { // if player wins round
      this.resultat = "round_success";
      victim = this.creature2.nom;
      attacker = this.creature1.nom;
      // this.affichage = this.creature1.nom +" inflige " + degat + " points de dégats à " + this.creature2.nom;
    }

    else if (result == 2) { // if adversary wins round
      this.resultat = "round_failure";
      victim = this.creature1.nom;
      attacker = this.creature2.nom;
      // this.affichage = this.creature2.nom +" inflige " + degat + " points de dégats à " + this.creature1.nom;
    }

    if (victim != null) { // if round has a winner
      this.affichage =
        [
          `${attacker} inflige `,
          `${degat}`,
          ` points de dégats à ${victim}`
        ]
      document.querySelector("#book_deco")?.classList.remove("zodiacAttackEffect");
      setTimeout(() => {
        document.querySelector("#book_deco")?.classList.add("zodiacAttackEffect");
      }, 0)
    }
    else { // if round is a draw
      this.resultat = "round_tie";
      this.affichage = ["Égalité", "", "Pas de dégâts pris ou infligés"];
    }
    console.log(this.affichage)
  }

  mancheSuivante() {
    this.result = null;
    this.choixJoueur = '';
    this.choixOrdi = '';

  }

  nouvellePartie() {
    this.audioService.clickButtonSound();
    let combat_container = document.querySelector<HTMLBodyElement>("#combat_container");
    combat_container?.classList.add("combat_leave_blackout");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      if (this.router.url === '/combat') { // load combat 2 if current combat is the first one
        this.router.navigate(['/combat/', String(2)]);
      }
      else if (/combat/.test(this.router.url)) { /// load combat n + 1
        let current_url = String(this.router.url);
        let combat_n = Number(current_url.substring(current_url.lastIndexOf('/') + 1));
        combat_n++;
        this.router.navigate(['/combat/', String(combat_n)]).then(() => {
          window.location.reload();
        });

      }
    },
      delay);
  }

  statistiques() {
    this.audioService.clickButtonSound();
    let combat_container = document.querySelector<HTMLBodyElement>("#combat_container");
    combat_container?.classList.add("combat_leave");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      this.router.navigate(['/statistique']);
    },
      delay);
  }

  retour() {
    this.audioService.clickButtonSound();

    // stop whatever result theme is playing
    this.audioService.switchResultTheme("victory", false, 0);
    this.audioService.switchResultTheme("defeat", false, 0);

    let combat_container = document.querySelector<HTMLBodyElement>("#combat_container");
    combat_container?.classList.add("combat_leave");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      this.router.navigate(['/accueil']);
    },
      delay);
  }


  barreVie() {

    if (this.combattant1.creature?.pv && this.creature1.pv) {
      this.vieRestant1 = ((this.creature1.pv) / (this.pvtoto1!)) * 100;
      console.log(this.creature1.pv);
      console.log(this.pvtoto1!);
    }

    if (this.combattant2.creature?.pv && this.creature2.pv) {
      this.vieRestant2 = ((this.creature2.pv) / (this.pvtoto2!)) * 100;
    }

    if (this.vieRestant1 < 0) {
      this.vieRestant1 = 0;
    }

    if (this.vieRestant2 < 0) {
      this.vieRestant2 = 0;
    }

    // pv bar animations
    setTimeout(() => {
      // change color from green to red;
      document.querySelector<HTMLBodyElement>(".player .vie-restante")!.style.backgroundColor = `color-mix(in srgb, green ${this.vieRestant1}%, darkred)`;
      document.querySelector<HTMLBodyElement>(".adv .vie-restante")!.style.backgroundColor = `color-mix(in srgb, green ${this.vieRestant2}%, darkred)`;
    }, 0);

  }

  combatProgress(){
    var adj = 2;// to start our with some volume
    let vie_player = (this.vieRestant1 - adj) / 100;
    let vie_adv = (this.vieRestant2 - adj) / 100;
    let combatProgress = 1 - ((vie_player + vie_adv) / 2);
    if (combatProgress > 1) { combatProgress = 1 };

    return combatProgress
  }

  roundSounds(fighter: string) {
    let attack_duration = parseFloat(this.animation_duration) * 1000; // get attack duration
    let attack_duration_last = parseFloat(this.animation_duration_last) * 1000; // get attack duration

    let combatProgress: number  = this.combatProgress();

    let final_strike: boolean = false;
    if (this.vieRestant2 <= 0 || this.vieRestant1 <= 0) { final_strike = true };

    setTimeout(() => {
      if (fighter == "player") {
        if (final_strike == true) {
          this.audioService.playCheer(1, true); // final strike max vol
        } else {
          this.audioService.playCheer(combatProgress, false); // vol increases as life runs out
        }

      } else if (fighter == "adv") {
        if (final_strike == true) {
          this.audioService.playGasp(1, true); // final strike max vol
        } else {
          this.audioService.playGasp(combatProgress, false); // vol increases as life runs out
        }
      }
    },attack_duration/2) // delay of crowd reaction


    if (final_strike == false){
      setTimeout(()=>{
        this.audioService.playMagicImpact(0.5);
        }, attack_duration);
        this.audioService.playLowBurst(0.5);
        this.audioService.playMagicAttack(1);

    } else {
      setTimeout(()=>{
        this.audioService.playMagicImpact(1);
        }, attack_duration_last*0.9);
        this.audioService.playLowBurst(1);
        this.audioService.playMagicAttack(1);
    }
  }

  arenaRotationAccelerate(){ // speed up arena as combat progresses (CAUSES JUMPS IN ANIMATION !)
    let arena = document.querySelector<HTMLElement>("#arena3d");
    let combatProgress: number  = this.combatProgress();
    arena!.style.animationDuration = String(60 * (1-combatProgress)) + "s";
    console.log("progress:" + combatProgress)
    console.log(arena!.style.animationDuration )
  }

  arenaOpacity(){ // reveal arena as combat progresses(CAUSES JUMPS IN ANIMATION !)
    let arena = document.querySelector<HTMLElement>("#arena3d");
    let combatProgress: number  = this.combatProgress();
    let opacity = combatProgress*2; // to make it visible faster
    opacity = opacity > 1? 1 : opacity; // top opacity at 1
    console.log(combatProgress)
    console.log(opacity)
    arena!.style.opacity = String(combatProgress);
  }


  bgColorShift(){ // change bg color for dramatic effect
    let arena_bg = document.querySelector<HTMLElement>("#combat_container");
    let combatProgress: number  = this.combatProgress();
    arena_bg!.style.backgroundColor = `rgba(25, 0, 0, ${combatProgress})`;
  }


}
