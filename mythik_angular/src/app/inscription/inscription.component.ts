import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from '../compte/compte.service';
import { Compte } from '../model';
import { AudioService } from '../audio.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private compteService: CompteService, public audioService : AudioService) {
  }

  ngOnInit() : void {

    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.loginCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);

    this.inscriptionForm = this.formBuilder.group({
      email: this.emailCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl
    });


    this.audioService.unrollScrollSound(0.1);
  }


  inscription() {
    if (this.inscriptionForm.valid) {
      const newCompte: Compte = {
        login : this.loginCtrl.value,
        password : this.passwordCtrl.value,
        email : this.emailCtrl.value,
        type : "humain"
      }

      this.compteService.save(newCompte).subscribe(resp => {
        this.inscriptionForm.patchValue(resp);
        })

    }

      this.router.navigate(['/connexion']);
  }

  // add class to trigger exit animation on click
  exitAnimation(){
    document.querySelector(".formulaire")?.classList.add("exitAnimation");
    console.log(document.querySelector(".container"));
    this.audioService.clickButtonSound()
  }


  onFocus(){
    this.audioService.brushSoundActive()
  }
}
