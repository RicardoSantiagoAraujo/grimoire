import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




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
  }

setInterval(candlelight, Math.floor(Math.random() * 300));


// desync fire gifs
function firestart(){
  const fires = document.querySelectorAll<HTMLImageElement>("#firewall img");
  fires.forEach(function (fire, index) {
    setTimeout(function () {
      fire.src= "assets/fire.gif";
      fire.style.display="block";
    },index * 1000)
  })
}

firestart()
