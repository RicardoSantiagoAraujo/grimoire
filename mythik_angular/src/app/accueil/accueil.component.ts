import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  // encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})
export class AccueilComponent implements OnInit, OnDestroy {
  Admin: boolean = false;

  constructor(private authService: AuthService, private audioService: AudioService) {


  }
  ngOnInit(): void {
    this.accueilTheme(true);
    this.audioService.playElectricHum(true);
  }


  ngOnDestroy(): void {
    this.accueilTheme(false)
  }



  isAdmin(): boolean {

    if (this.authService.getCompte()!.type == "admin") {

      return true
    }
    else {
      return false;
    }
  }


  accueilTheme(play: boolean){
    this.audioService.switchAccueilTheme(play);
    // console.log("THEME MUSIC")
  }


  goGrimoire(){
    this.audioService.playLowBurst(1);
  }

  goCombat(){
    this.audioService.playLowBurst(1);
  }

  hoverGrimoire(state: boolean){
    this.audioService.playAnimalSounds(state);
  }

  hoverCombat(state: boolean){
    this.audioService.playCombatSounds(state);
  }


  hoverSign(){
    this.audioService.playWoodCreak();
  }


  clickSign(){
    setTimeout(()=>{
    this.audioService.playWoodImpact()
    }, 500) // adjust delay to impact
  }



}
