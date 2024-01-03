import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Compte } from '../model';
import { Observable } from 'rxjs';
import { CompteService } from './compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  compteForm!: FormGroup;

  idCtrl!: FormControl;
  emailCtrl!: FormControl;
  loginCtrl!: FormControl;
  passwordCtrl!: FormControl;
  typeCtrl!: FormControl;

  showForm: boolean = false;
  compte$!: Observable<Compte[]>;

  constructor(private compteService: CompteService, private formBuilder: FormBuilder, private router: Router) {
    this.load();
  }

  ngOnInit(): void {
    this.idCtrl = this.formBuilder.control('');
    this.emailCtrl = this.formBuilder.control('');
    this.loginCtrl = this.formBuilder.control('',Validators.required);
    this.passwordCtrl = this.formBuilder.control('');
    this.typeCtrl = this.formBuilder.control('');

    this.compteForm = this.formBuilder.group( {
      id: this.idCtrl,
      email: this.emailCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl,
      type: this.typeCtrl
    });
  }

  load() {
    this.compte$ = this.compteService.findAll();
  }

  list() {
    return this.compte$;
  }

  add() {
    this.compteForm.reset();
    this.showForm = true;
  }

  edit(id?: number) {
    
    this.compteService.findById(id).subscribe(resp => {
      this.compteForm.patchValue(resp);
      this.showForm = true;
    });
    
  }

  save() {
    const newcompte: Compte = {
      id: this.idCtrl.value,
      email: this.emailCtrl.value,
      login: this.loginCtrl.value,
      password: this.passwordCtrl.value,
      type: this.typeCtrl.value
    }
    this.compteService.save(newcompte).subscribe(resp => {
      this.compteForm.patchValue(resp);
      this.load();
      })
    this.cancel();
  }

  remove(id?: number) {
    this.compteService.delete(id).subscribe(resp => this.load());
  }

  cancel() {
    this.showForm = false;
    this.compteForm.reset();
  }
  retour(){
    this.router.navigate(['/accueil']);

  }
}

