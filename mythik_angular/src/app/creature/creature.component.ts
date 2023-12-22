import { Component } from '@angular/core';
import { CreatureService } from './creature.service';
import { Observable } from 'rxjs';
import { Creature } from '../model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent {

creatures$!: Observable<Creature[]>;
showForm: boolean = false; 
creatureForm!: FormGroup;
idCtrl!: FormControl;
nomCtrl!: FormControl; 
descriptionCtrl!: FormControl; 
dieuCtrl!: FormControl; 
attaqueCtrl!: FormControl; 
pvCtrl!: FormControl; 
imageCtrl!: FormControl; 
mythologieCtrl!: FormControl; 
typeElementCtrl!: FormControl; 
  


  constructor(private creatureService: CreatureService, private formBuilder: FormBuilder, private router: Router){
    this.load(); 
  }

  ngOnInit(): void {
    this.idCtrl = this.formBuilder.control('');
    this.nomCtrl = this.formBuilder.control('');
    this.descriptionCtrl = this.formBuilder.control('');
    this.dieuCtrl = this.formBuilder.control('');
    this.attaqueCtrl = this.formBuilder.control('');
    this.pvCtrl = this.formBuilder.control('');
    this.imageCtrl = this.formBuilder.control('');
    this.mythologieCtrl = this.formBuilder.control('');
    this.typeElementCtrl = this.formBuilder.control('');

    this.creatureForm = this.formBuilder.group( {
      id: this.idCtrl,
      nom: this.nomCtrl,
      description: this.descriptionCtrl,
      dieu: this.dieuCtrl,
      attaque: this.attaqueCtrl,
      pv: this.pvCtrl,
      image: this.imageCtrl,
      mythologie: this.mythologieCtrl, 
      typeElement: this.typeElementCtrl,
    });}
    
  load() {
    this.creatures$ = this.creatureService.findAll();
  }

  list() {
    return this.creatures$;
  }

  add(){
    this.creatureForm.reset();
    this.showForm = true;
  }
  cancel(){
    this.showForm = false;
    this.creatureForm.reset();
  }

  remove(id?: number) {
    this.creatureService.delete(id).subscribe(resp => {this.load()})

  }

  edit(id?: number) {
    this.creatureService.findById(id).subscribe(resp => {
      this.creatureForm.patchValue(resp);
      this.showForm = true;
    });
  }

  save() {
    if(this.creatureForm.value.id ){
        this.creatureService.update(this.creatureForm.value).subscribe(resp => {this.load()})
    }
    else{
      this.creatureService.create(this.creatureForm.value).subscribe(resp => {this.load()})
    }

      this.cancel(); 
  }

  retour(){
    this.router.navigate(['/accueil']);

  }
  
}
