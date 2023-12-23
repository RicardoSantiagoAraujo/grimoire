import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
  encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})

export class DesktopComponent {
}


// CANDLELIGHT EFFECT FOR BODY
function candlelight(){
  let lightH = Math.floor(Math.random() * 1);
  let lightS = Math.floor(Math.random() * 100);
  let lightL = Math.floor(Math.random() * 100);
  let darkH = Math.floor(Math.random() * 1);
  let darkS = Math.floor(Math.random() * 100);
  let darkL = Math.floor(Math.random() * 10);
  let colL = `hsla(${lightH},${lightS}%,${lightL}%, 0.1)`
  let colD = `hsla(${darkH},${darkS}%,${darkL}%, 0.1)`

  let blurL = Math.floor(Math.random() * 60);

  document.documentElement.style.setProperty("--color-overlay-l", colL);
  document.documentElement.style.setProperty("--color-overlay-d", colD);
  document.documentElement.style.setProperty("--blur-overlay-l", blurL+"%");
  // console.log("candlelight change")
}

setInterval(candlelight, Math.floor(Math.random() * 300));


// desync fire gifs
function firestart(){
const fires = document.querySelectorAll<HTMLImageElement>("#firewall img");
fires.forEach(function (fire, index) {
  setTimeout(function () {
    fire.src= "assets/fire.gif";
    fire.style.display="block";
    console.log("TEST FIRE START")
  },index * 1000)
})
}

firestart()
setTimeout(firestart, 3000);
