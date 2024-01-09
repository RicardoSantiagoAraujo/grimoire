import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor (private authService : AuthService){}

  ngOnInit(): void {
    this.authService.logout();
  }

  // add class to trigger exit animation on click
  exitAnimation(){
    document.querySelector(".container")?.classList.add("exitAnimation");
    console.log(document.querySelector(".container"));
  }
}
