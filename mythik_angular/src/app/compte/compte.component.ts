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
    this.loginCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = this.formBuilder.control('');
    this.typeCtrl = this.formBuilder.control('');

    this.compteForm = this.formBuilder.group({
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

  retour() {
    this.router.navigate(['/accueil']);
    this.exitAnimation()

  }

  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector("section")?.classList.add("exitAnimation");
  }


  // Function to sort table by column
  sortTable(n: number, type: string) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table_compte")! as HTMLTableElement;
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
