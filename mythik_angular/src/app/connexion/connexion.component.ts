import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit  {

  connexionForm!: FormGroup;

  loginCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {

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
  }
}
