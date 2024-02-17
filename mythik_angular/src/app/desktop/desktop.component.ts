import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  // encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})

export class DesktopComponent implements OnInit {
  exitGrimoire: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loop()
  }

  // add class to trigger exit animation on click
  exitAnimation(){
        this.exitGrimoire = true;
        document.querySelector("#retour_grimoire button")?.classList.add("exitButtonTrigger");
        setTimeout(()=>{
        document.querySelector("section")?.classList.add("exitAnimation");
        this.router.navigate(['/accueil'])
        },
        1000
        )
  }

  // insect animation
  insectAnimate(speed:number){
    Math.random() * 1000 * 60;
    let insect_track = document.querySelector<HTMLElement>("#insect_track")!;
    let insect = document.querySelector<HTMLElement>("#insect_track img")!;
    let random_angle =  Math.round(Math.random() * 360);
    insect_track.style.transform = `translate(-50%,-50%) rotate(${random_angle}deg)`;
    insect.style.transition = "right " + speed/1000 + "s";
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
