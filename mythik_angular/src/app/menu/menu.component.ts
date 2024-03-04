import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor (private authService : AuthService, public audioService: AudioService){}

  ngOnInit(): void {
    this.authService.logout();
    this.audioService.unrollScrollSound(0.1);
  }

  // add class to trigger exit animation on click
  exitAnimation(){
    this.audioService.clickButtonSound();
    document.querySelector(".container")?.classList.add("exitAnimation");
    console.log(document.querySelector(".container"));
  }


    // to view info and credits
    aboutGrimoire(){
      let about_container = document.querySelector(".about_container");

      this.audioService.clickButtonSound();
      about_container?.classList.toggle("aboutActive");
    }
}
