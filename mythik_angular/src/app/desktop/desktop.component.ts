import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  // encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})

export class DesktopComponent implements OnInit {
  exitGrimoire: boolean = false;

  constructor(private router: Router, private audioService: AudioService) { }


  ngOnInit(): void {
    this.loop();
    this.audioService.playAnimalSounds(false);
    this.propSounds();
  }

  propSounds(){
    // add sound as each prop appears
    document.querySelectorAll<HTMLElement>(".desktop_prop").forEach((prop)=>{
      let delay =getComputedStyle(prop) .getPropertyValue('animation-delay');
      console.log(parseFloat(delay) * 1000);
      setTimeout(()=>{
        this.audioService.itemDown(0.3, "paper");
      }, parseFloat(delay) * 1000 * 1.2);
    })
  }

  // add class to trigger exit animation on click
  exitAnimation(){
        this.exitGrimoire = true;
        this.audioService.unrollScrollSound(0.1);
        document.querySelector("#retour_grimoire button")?.classList.add("exitButtonTrigger");
        setTimeout(()=>{
        document.querySelector("section")?.classList.add("exitAnimation");
        this.router.navigate(['/accueil'])
        },
        1000
        )
  }

  exitHover(vol: number){
    this.audioService.playWeaponDraw(vol);
}

  // insect animation
  insectAnimate(speed:number){
    setTimeout(()=>{this.audioService.playInsectCrawl()}, 1400) // Insect crawl sounds. Adjust to insect delay

    Math.random() * 1000 * 60;
    let insect_track = document.querySelector<HTMLElement>("#insect_track")!;
    let insect = document.querySelector<HTMLElement>("#insect_track img")!;
    let random_angle =  Math.round(Math.random() * 360);

    // add some noise to positioning, centered on 50%
    const noise = 10;
    let posX =  Math.round(50 + Math.random() * noise*2 - noise);
    let posY =  Math.round(50 + Math.random() * noise*2 - noise);
    insect_track.style.transform = `translate(-${posX}%,-${posY}%) rotate(${random_angle}deg)`;
    insect.style.transition = "right " + speed/1000 + "s linear";
    if (insect.style.right == "0%"){ // GO BACK
      insect.style.right= "100%";
      insect.style.transform= "scaleX(1)";
    } else { // GO FORTH
      insect.style.right= "0%";
      insect.style.transform= "scaleX(-1)";
    }
  }

  // triggeranimation at set intervals
  loop() {
    let min_gap = 6000; // minimum amount of milisecs between animations
    let max_gap = 1000 * 3; // max amount of milisects between animation ( + min_gap)
    var rand = Math.round(Math.random() * max_gap) + min_gap;
    setTimeout(() => {
            this.insectAnimate(min_gap);
            this.loop();
            console.log("insect !")
    }, rand);
  };
}
