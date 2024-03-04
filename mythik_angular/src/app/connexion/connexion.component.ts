import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit  {

  connexionForm!: FormGroup;

  loginCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, public audioService: AudioService) {

  }

  ngOnInit(): void {
    this.loginCtrl = this.formBuilder.control("", Validators.required);
    this.passwordCtrl = this.formBuilder.control("", [Validators.required, Validators.minLength(5)]);

    this.connexionForm = this.formBuilder.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });


    this.audioService.unrollScrollSound(0.1);
  }



  connexion() {
    this.authService.login(this.loginCtrl.value, this.passwordCtrl.value);
    if (this.authService.isLogged()) {
      this.router.navigate(["/accueil"])
    }
  }

  cancel() {
    this.loginCtrl.reset();
  }

  // add class to trigger exit animation on click
  exitAnimation(){
    document.querySelector(".formulaire")?.classList.add("exitAnimation");
    this.audioService.clickButtonSound()
  }

  onFocus(){
    this.audioService.brushSoundActive()
  }

  breakChainsAnimation(){
    document.querySelector("app-chains")?.classList.add("chain_dissolve");
    this.chainBreakSounds()
  }

  chainBreakSounds(){

    setTimeout(()=>{
      this.audioService.chainBreakSound();
      }, 500)
    // document.querySelectorAll<HTMLElement>(".chain").forEach((chain)=>{
    // })
  }

}
