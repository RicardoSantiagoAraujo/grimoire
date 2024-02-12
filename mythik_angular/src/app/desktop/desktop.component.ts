import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  // encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})

export class DesktopComponent {


  // add class to trigger exit animation on click
  exitAnimation(){
        document.querySelector("section")?.classList.add("exitAnimation");
  }
}
