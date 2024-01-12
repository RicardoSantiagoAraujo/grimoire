import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit  {

  connexionForm!: FormGroup;

  loginCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.loginCtrl = this.formBuilder.control("", Validators.required);
    this.passwordCtrl = this.formBuilder.control("", [Validators.required, Validators.minLength(5)]);

    this.connexionForm = this.formBuilder.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
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
  }
  breakChainsAnimation(){
    document.querySelector("app-chains")?.classList.add("chain_dissolve");
  }
}
