import { Component } from '@angular/core';
import { CreatureService } from './creature.service';
import { Observable } from 'rxjs';
import { Creature } from '../model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

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



  constructor(private creatureService: CreatureService, private formBuilder: FormBuilder, private router: Router,
    private audioService: AudioService){
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
    setTimeout(()=>{this.audioService.unrollScrollSound(0.1)}, 1000);
  }

  list() {
    return this.creatures$;
  }

  add(){
    this.creatureForm.reset();
    this.showForm = true;
    this.audioService.unrollScrollSound(0.1);
    this.audioService.playCoinSound();
  }

  cancel(){
    this.audioService.unrollScrollSound(0.1);
    this.audioService.playCoinSound();
    let delay= 3000;
    document.querySelector<HTMLElement>(".creature_edit")!.classList.add("hideCreatureForm");
    document.querySelector<HTMLElement>(".creature_edit")!.style.animationDuration= delay/1000+"s";
    setTimeout(()=>{
    this.showForm = false;
    this.creatureForm.reset();
    document.querySelector<HTMLElement>(".creature_edit")!.classList.remove("hideCreatureForm");
    }, delay)
  }

  remove(id?: number) {
    this.creatureService.delete(id).subscribe(resp => {this.load()})
    this.audioService.playCoinSound();
  }

  edit(id?: number) {
    this.creatureService.findById(id).subscribe(resp => {
      this.creatureForm.patchValue(resp);
      this.showForm = true;
      this.audioService.unrollScrollSound(0.1);
      this.audioService.playCoinSound();
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
    this.audioService.unrollScrollSound(0.1);
    this.audioService.playCoinSound();
    this.router.navigate(['/accueil']);
    this.exitAnimation()
  }

    // add class to trigger exit animation on click
    exitAnimation(){
      document.querySelector("section")?.classList.add("exitAnimation");
    }



    // Function to sort table by column
  sortTable(n: number, type: string) {
    this.audioService.unrollScrollSound(0.1);
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table_creature")! as HTMLTableElement;
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if ((type == "string" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) // if string
          ||
              (type == "number" && Number(x.innerHTML) > Number(y.innerHTML))) // if numbers
          {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if ((type == "string" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) // if string
          ||
              (type == "number" && Number(x.innerHTML) < Number(y.innerHTML))) // if numbers
          {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
