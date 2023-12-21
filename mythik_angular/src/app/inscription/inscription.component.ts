import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from '../compte/compte.service';
import { Compte } from '../model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionForm!: FormGroup;

  showForm: boolean = true;

  emailCtrl!: FormControl;
  loginCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder, private router: Router, private compteService: CompteService) {
  }

  ngOnInit() : void {

    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.loginCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);

    this.inscriptionForm = this.formBuilder.group({
      email: this.emailCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }


  inscription() {
    if (this.inscriptionForm.valid) {
      const newCompte: Compte = {
        email : this.emailCtrl.value,
        login : this.loginCtrl.value,
        password : this.passwordCtrl.value,
      }

      this.compteService.save(newCompte).subscribe(resp => {
        this.inscriptionForm.patchValue(resp);
        })
    }

      this.router.navigate(['/connexion']);
  }
}

