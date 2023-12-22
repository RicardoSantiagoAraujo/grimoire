import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Compte } from '../model';
import { Observable } from 'rxjs';
import { CompteService } from './compte.service';

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

  showForm: boolean = true;
  compte$!: Observable<Compte[]>;

  constructor(private compteService: CompteService, private formBuilder: FormBuilder) {
    this.load();
  }

  ngOnInit(): void {
    this.idCtrl = this.formBuilder.control('');
    this.emailCtrl = this.formBuilder.control('');
    this.loginCtrl = this.formBuilder.control('',Validators.required);
    this.passwordCtrl = this.formBuilder.control('');

    this.compteForm = this.formBuilder.group( {
      id: this.idCtrl,
      email: this.emailCtrl,
      username: this.loginCtrl,
      password: this.passwordCtrl
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
    this.compteService.save(this.compteForm.value).subscribe(resp => this.load());
    this.cancel();
  }

  remove(id?: number) {
    this.compteService.delete(id).subscribe(resp => this.load());
  }

  cancel() {
    this.showForm = false;
    this.compteForm.reset();
  }
}

