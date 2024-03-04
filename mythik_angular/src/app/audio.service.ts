import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private muted: boolean = true;

  // THEMES
  accueilTheme = new Audio("../assets/audio/accueilTheme.mp3");
  combatSelectionTheme = new Audio("../assets/audio/combatSelectionTheme.mp3");
  victoryTheme = new Audio("../assets/audio/victoryTheme.mp3");
  defeatTheme = new Audio("../assets/audio/defeatTheme.mp3");


  // BACKGROUND SOUND
  whiteNoise = new Audio('../assets/audio/monastery_bg.wav');

  // INDIVIDUAL SOUNDS
  bellSound = new Audio('../assets/audio/bell.wav');
  buttonSound = new Audio('../assets/audio/click.wav');
  unrollScroll = new Audio('../assets/audio/ScrollPaper.wav');
  brushSound = new Audio('../assets/audio/brushStroke.wav');
  chainBreak = new Audio('../assets/audio/chainBreak.wav');

  electricHum = new Audio("../assets/audio/electric_hum.wav");
  lowBurst = new Audio("../assets/audio/low_burst.wav");
  animalSounds = new Audio("../assets/audio/animal_sounds.wav");
  combatSounds = new Audio("../assets/audio/combat_sounds.mp3");
  woodCreak = new Audio("../assets/audio/wood_creak.wav");
  woodImpact = new Audio("../assets/audio/wood_impact.wav");
  coinSound = new Audio("../assets/audio/coin.wav");
  insectCrawl = new Audio("../assets/audio/insect_crawl.wav");
  weaponDraw = new Audio("../assets/audio/weapon_draw.wav");
  pageFlip_1 = new Audio("../assets/audio/page_flip_1.wav");
  pageFlip_2 = new Audio("../assets/audio/page_flip_2.wav");
  pageFlip_3 = new Audio("../assets/audio/page_flip_3.wav");
  pageFlip_4 = new Audio("../assets/audio/page_flip_4.wav");
  pageFlip_5 = new Audio("../assets/audio/page_flip_5.wav");
  pageFlip_6 = new Audio("../assets/audio/page_flip_6.wav");
  fireSounds = new Audio("../assets/audio/fire_sounds.wav");
  chimes = new Audio("../assets/audio/chimes.flac");
  chime = new Audio("../assets/audio/chime_single.wav");
  chants = new Audio("../assets/audio/chant.mp3");
  bookDown = new Audio("../assets/audio/book_down.mp3");
  paperDown = new Audio("../assets/audio/paper_down.flac");
  grimoireDown = new Audio("../assets/audio/grimoire_appear.wav");
  whisper_1 = new Audio("../assets/audio/whisper_1.wav");
  whisper_2 = new Audio("../assets/audio/whisper_2.wav");
  gong = new Audio("../assets/audio/gong.wav");
  horn = new Audio("../assets/audio/battle_horn.wav");
  kabukiScream = new Audio("../assets/audio/scream_kabuki.mp3");


  cheer_1 = new Audio("../assets/audio/cheering_1.wav");
  cheer_2 = new Audio("../assets/audio/cheering_2.wav");
  cheer_3 = new Audio("../assets/audio/cheering_3.wav");
  cheer_4 = new Audio("../assets/audio/cheering_4.wav");
  gasp_1 = new Audio("../assets/audio/gasp_1.wav");
  gasp_2 = new Audio("../assets/audio/gasp_2.wav");
  gasp_3 = new Audio("../assets/audio/gasp_3.wav");
  gasp_4 = new Audio("../assets/audio/gasp_4.wav");
  gasp_5 = new Audio("../assets/audio/gasp_5.wav");
  screamFear_1 = new Audio("../assets/audio/scream_fear.wav");

  tension = new Audio("../assets/audio/tension.wav")


  magicAttack = new Audio("../assets/audio/magic_attack.mp3")
  magicImpact = new Audio("../assets/audio/magic_impact.ogg")


  constructor() { }

  toggleMute(): void {
    this.muted = !this.muted;
  }

  isMuted(): boolean {
    return this.muted;
  }

  toggleWhiteNoise() {
      this.whiteNoise.loop=true;

      if (!this.muted){
      this.whiteNoise.play();
      this.bellSound.play();
      } else {
        this.whiteNoise.pause();
      }
  }


  clickButtonSound() {
    if (!this.muted){
    this.buttonSound.play();
    }
}

  unrollScrollSound(vol:number) {
    if (!this.muted){
    this.unrollScroll.currentTime = 0;
    this.unrollScroll.play();
    this.unrollScroll.volume = vol;
    }
  }

  brushSoundActive() {
    if (!this.muted){
    this.brushSound.currentTime = 0;
    this.brushSound.play();
    console.log(this.brushSound)
    }
  }


  chainBreakSound() {
    if (!this.muted){
    this.chainBreak.play();
    console.log(this.chainBreak)
    }
  }

  switchAccueilTheme(play: boolean) {
    if (!this.muted && play){
    this.accueilTheme.loop=true;
    this.fadeIn(this.accueilTheme, 0.4, 1000, 10000, 100);
    } else {
      this.accueilTheme.pause()
      this.accueilTheme.currentTime = 0;
    }
  }


  switchCombatSelectionTheme(play: boolean , vol: number) {
    if (!this.combatSelectionTheme.paused && !this.muted){
      //if already playing, simply adjust volume
      // this.combatSelectionTheme.volume=vol; // sudden increase
      this.increase(this.combatSelectionTheme, vol, 0, 2000, 100) // gradient increase
    }
    else if (!this.muted && play){
    this.combatSelectionTheme.loop=true;
    this.fadeIn(this.combatSelectionTheme, vol, 1000, 2000, 100);
    } else {
      this.combatSelectionTheme.pause()
      this.combatSelectionTheme.currentTime = 0;
    }
  }

  switchResultTheme(result: string, play: boolean , vol: number) {
    let theme;
    switch(result){
      case "victory": theme = this.victoryTheme; break;
      case "defeat": theme = this.defeatTheme; break;
      default: theme = this.accueilTheme; // default to the accueil theme
    }
    if (!theme.paused && !this.muted){
      //if already playing, simply adjust volume
      // theme.volume=vol; // sudden increase
      this.increase(theme, vol, 0, 2000, 100) // gradient increase
    }
    else if (!this.muted && play){
    theme.loop=true;
    this.fadeIn(theme, vol, 1000, 2000, 100);
    } else {
      theme.pause()
      theme.currentTime = 0;
    }
  }






  playElectricHum(play: boolean) {
    if (!this.muted && play){
      // this.electricHum.loop=true;
      this.fadeOut(this.electricHum, 0.8, 0, 10000, 100);
      } else {
        this.electricHum.pause()
        this.electricHum.currentTime = 0;
      }
  }

  playLowBurst(vol: number) {
    if (!this.muted){
    this.lowBurst.currentTime = 0;
    this.lowBurst.play();
    this.lowBurst.volume= vol;
    }
  }

  playGong(vol: number)  {
    if (!this.muted){
    this.gong.currentTime = 0;
    this.gong.play();
    this.gong.volume= vol;
    }
  }

  playHorn(vol: number)  {
    if (!this.muted){
    this.horn.currentTime = 0;
    this.horn.play();
    this.horn.volume= vol;
    }
  }

  playMagicAttack(vol: number)  {
    if (!this.muted){
    this.magicAttack.currentTime = 0;
    this.magicAttack.play();
    this.magicAttack.volume= vol;
    }
  }


  playMagicImpact(vol: number)  {
    if (!this.muted){
    this.magicImpact.currentTime = 0;
    this.magicImpact.play();
    this.magicImpact.volume= vol;
    }
  }


  playKabuki(vol: number)  {
    if (!this.muted){
    this.kabukiScream.currentTime = 0;
    this.kabukiScream.play();
    this.kabukiScream.volume= vol;
    }
  }

  playWoodCreak() {
    if (!this.muted){
    this.woodCreak.currentTime = 0;
    this.woodCreak.play();
    this.woodCreak.volume = 0.5;
    }
  }

  playWoodImpact() {
    if (!this.muted){
    this.woodImpact.currentTime = 0;
    this.woodImpact.play();
    }
  }

  playAnimalSounds(state: boolean) {
    if (!this.muted && state){
    this.animalSounds.currentTime = 0;
    this.fadeIn(this.animalSounds, 0.5, 0, 3000, 100);
    } else{
      this.animalSounds.pause();
    }
  }

  playCombatSounds(state: boolean) {
    if (!this.muted && state){
    this.combatSounds.currentTime = 0;
    this.fadeIn(this.combatSounds, 0.5, 0, 3000, 100);
    } else{
      this.combatSounds.pause();
    }
  }

  playCoinSound() {
    if (!this.muted){
    this.coinSound.currentTime = 0;
    this.coinSound.play();
    }
  }

  playInsectCrawl() {
    if (!this.muted){
    this.insectCrawl.currentTime = 0;
    this.insectCrawl.play();
    this.insectCrawl.volume= 0.1;
    }
  }

  playWeaponDraw(vol: number) {
    if (!this.muted){
    this.weaponDraw.currentTime = 0;
    this.weaponDraw.play();
    this.weaponDraw.volume= vol;
    }
  }

  playPageFlip(vol: number) {
    if (!this.muted){
    let i = Math.floor(Math.random() * 6);
    let sound = [this.pageFlip_1, this.pageFlip_2, this.pageFlip_3, this.pageFlip_4, this.pageFlip_5, this.pageFlip_6][i];

    console.log(i);
    sound.currentTime = 0;
    sound.play();
    sound.volume= vol;
    }
  }


  playCheer(vol: number, final: boolean) {
    if (!this.muted){
      var sounds = [this.cheer_1, this.cheer_2, this.cheer_3, this.cheer_4];
      if (!final){ // if not final, play one at random
        let i = Math.floor(Math.random() * sounds.length); // multiply by total number of samples
        let sound = sounds[i];
        console.log(i);
        sound.currentTime = 0;
        sound.play();
        sound.volume= vol;
      } else{ // if final, play all !
        sounds.forEach((sound)=>{
          sound.currentTime = 0;
          sound.play();
          sound.volume= vol;
        }
        )
      }
    }
  }

  playGasp(vol: number, final: boolean) {
    if (!this.muted){
      var sounds = [this.gasp_1, this.gasp_2, this.gasp_3, this.gasp_4, this.gasp_5, this.screamFear_1];
      if (!final){ // if not final, play one at random
        let i = Math.floor(Math.random() * sounds.length); // multiply by total number of samples
        let sound = sounds[i];
        console.log(i);
        sound.currentTime = 0;
        sound.play();
        sound.volume= vol;
      } else{ // if final, play all !
        sounds.forEach((sound)=>{
          sound.currentTime = 0;
          sound.play();
          sound.volume= vol;
        }
        )
      }
    }
  }


  playTension(vol: number) {
    if (!this.muted){
      this.tension.currentTime = 0;
      this.tension.play();
      this.tension.volume= vol;
      }
  }


  switchFireSounds(play: boolean) {
    if (!this.muted && play){
    this.fireSounds.loop=true;
    this.fadeIn(this.fireSounds, 1, 500, 5000, 100);
    } else {
      this.fireSounds.pause()
      this.fireSounds.currentTime = 0;
    }
  }

  switchChants(play: boolean) {
    if (!this.muted && play){
    this.chants.loop=true;
    this.fadeIn(this.chants, 0.3, 500, 2000, 100);
    } else {
      this.chants.pause()
      this.chants.currentTime = 0;
    }
  }

  switchChimes(play: boolean) {
    if (!this.muted && play){
    this.chimes.loop=true;
    this.fadeIn(this.chimes, 0.3, 500, 2000, 100);
    } else {
      this.chimes.pause()
      this.chimes.currentTime = 0;
    }
  }



  playChime(vol: number) {
    if (!this.muted){
    this.chime.currentTime = 0;
    this.chime.play();
    this.chime.volume= vol;
    }
  }

  playWhisper_1(vol: number) {
    if (!this.muted){
    this.whisper_1.currentTime = 0.1; // start at specific time
    this.whisper_1.play();
    this.whisper_1.volume= vol;
    }
  }

  playWhisper_2(vol: number) {
    if (!this.muted){
    this.whisper_2.currentTime = 0; // start at specific time
    this.whisper_2.play();
    this.whisper_2.volume= vol;
    }
  }

  itemDown(vol: number, what: string) {
    let sound;
    console.log("HELLO")
    if (!this.muted){
      switch (what){
        case "book": sound = this.bookDown; break;
        case "paper": sound = this.paperDown; break;
        case "grimoire": sound = this.grimoireDown; break;
      }
    console.log(sound);
    sound!.currentTime = 0;
    sound!.play();
    sound!.volume= vol;
    }
  }


  fadeIn(audioElement:any, maxVol: number, startDelay: number, fadeInTime: number, steps: number) {
    // maxVol: range 0 : 1
    // startDelay: miliseconds till gradient starts
    // fadeInTime: in miliseconds
    // steps: granularity of gradient
    let i = 0;
    let interval = fadeInTime / steps;
    setTimeout(function () {
      audioElement.play();
      audioElement.volume=0;
      let intervalId = setInterval(function() {
        // console.log(audioElement.volume);
        let volume = (maxVol / steps) * i;
        audioElement.volume = volume;
        if(++i >= steps || audioElement.paused) // stop once gradient is complete OR if music has been paused
          clearInterval(intervalId);
      }, interval);
    }, startDelay);
  }


  increase(audioElement:any, maxVol: number, startDelay: number, increaseTime: number, steps: number) {
    // maxVol: range 0 : 1
    // startDelay: miliseconds till gradient starts
    // increaseTime: in miliseconds
    // steps: granularity of gradient
    let i = 0;
    let interval = increaseTime / steps;
    setTimeout(function () {
      // audioElement.volume; // start from current volume
      let intervalId = setInterval(function() {
        // console.log(audioElement.volume);
        let volume = (maxVol / steps) * i;
        audioElement.volume = volume;
        if(++i >= steps || audioElement.paused) // stop once gradient is complete OR if music has been paused
          clearInterval(intervalId);
      }, interval);
    }, startDelay);
  }


  fadeOut(audioElement:any, startVol: number, startDelay: number, fadeOutTime: number, steps: number) {
    // maxVol: range 0 : 1
    // startDelay: miliseconds till gradient starts
    // fadeOuTime: in miliseconds
    // steps: granularity of gradient
    let i = steps;
    let interval = fadeOutTime / steps;
    setTimeout(function () {
      audioElement.play();
      audioElement.volume=startVol;
      let intervalId = setInterval(function() {
        // console.log(audioElement.volume);
        let volume = (startVol / steps) * i;
        audioElement.volume = volume;
        if(--i <= 0 || audioElement.paused) // stop once gradient is complete OR if music has been paused
          clearInterval(intervalId);
      }, interval);
    }, startDelay);
  }
}
