import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chains',
  templateUrl: './chains.component.html',
  styleUrls: ['./chains.component.css']
})
export class ChainsComponent  implements OnInit{

  constructor(private audioService: AudioService,  private router: Router){}

  ngOnInit(): void {

    // get current route
    let current_route = this.router.url.split('?')[0];
    console.log(current_route);

    // If currently in landing page:
    if ( current_route == "/menu"){
      setTimeout(()=>{
        this.audioService.chainBreakSound();
        },1000);
    }
  }

}
