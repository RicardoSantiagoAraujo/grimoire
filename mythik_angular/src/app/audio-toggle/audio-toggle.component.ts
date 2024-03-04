import { Component } from '@angular/core';
import { AudioService } from '../audio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-toggle',
  templateUrl: './audio-toggle.component.html',
  styleUrls: ['./audio-toggle.component.scss']
})
export class AudioToggleComponent {

  constructor(private audioService: AudioService, private router: Router) {}

  toggleBell(){
    this.audioService.toggleMute();

    let bell = document.querySelector<HTMLElement>("#audio_toggle")!;


    this.audioService.toggleWhiteNoise();


    // get current route
    let current_route = this.router.url.split('?')[0];
    console.log(current_route);

    // If currently in accueil:
    if ( current_route == "/accueil/intro" || current_route == "/accueil"
    ){
      this.audioService.switchAccueilTheme(true)
    }


    // If currently in grimoire:
    if ( current_route == "/grimoire"
    ){
      this.audioService.switchChants(true)
    }


    // If currently in combat_section:
    if ( current_route == "/combat" || current_route.includes("/combat/")
    ){
      this.audioService.switchCombatSelectionTheme(true, 0.1);
      this.audioService.switchResultTheme("defeat", true, 0 ); // won't play again if vol is 0
      this.audioService.switchResultTheme("victory", true, 0 ); // won't play again if vol is 0
    }


    // If currently in combat_section:
    if ( current_route == "/statistique"
    ){
      this.audioService.switchResultTheme("defeat", true, 0 ); // won't play again if vol is 0
      this.audioService.switchResultTheme("victory", true, 0 ); // won't play again if vol is 0
      this.audioService.switchChants(true); // plays the default which is the theme song
    }


    if (this.audioService.isMuted()){

      bell.classList.remove("soundActive")
      setTimeout(()=>{

      bell.classList.add("soundInactive")
      },0)
    } else {

      bell.classList.remove("soundInactive")
      setTimeout(()=>{
      bell.classList.add("soundActive")
      },0)
    }
  }

}
