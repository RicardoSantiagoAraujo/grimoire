import { Component, ViewEncapsulation, Input } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  // encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})

export class DesktopComponent {
  exitGrimoire: boolean = false;

  constructor(private router: Router) { }

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
}
