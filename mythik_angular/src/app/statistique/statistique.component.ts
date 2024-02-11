import { Component, OnInit } from '@angular/core';
import { CombatService } from '../combat/combat.service';
import { CombattantService } from '../selection-combat/combattant.service';
import { AuthService } from '../auth.service';
import { Combattant, Compte } from '../model';
import { CompteService } from '../compte/compte.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})

export class StatistiqueComponent implements OnInit {
  compte!: any;
  compteIA!: Compte;
  combattants!: Combattant[];
  mesParties: boolean = true;
  IAParties: boolean = false;
  id!: number;
  tauxVictoire?: number;
  changement: boolean = true;
  constructor(private combattantService: CombattantService, private compteService: CompteService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.compte = this.authService.getCompte();
    this.compteService.findIA().subscribe(resp => {
      this.compteIA = resp;
    });
  }

  mesparties() {
    this.mesParties = true;
    this.IAParties = false;
    this.changement = false;
    this.combattantService.findByCompteId(this.compte.id).subscribe(resp => {
      this.combattants = resp
      this.unrollScroll(this.combattants.length)
    });
    this.stat()
  }

  IAparties() {
    this.mesParties = false;
    this.IAParties = true;
    this.changement = false;
    this.combattantService.findByCompteId(this.compteIA.id).subscribe(resp => {
      this.combattants = resp
      this.unrollScroll(this.combattants.length)
    });
    this.stat()
  }

  unrollScroll(n_items: number) {
    // console.log(n_items)
    let length_scroll = (n_items * 50) + 50;
    document.querySelector<HTMLBodyElement>(".stats_list_body")!.style.maxHeight = length_scroll + "px";
    setTimeout(() => {
      document.querySelector<HTMLElement>(".stats_list_body thead")!.classList.add("visible_thead");
      document.querySelectorAll<HTMLElement>(".stats_list_body tbody tr td")!.forEach(element => {
      element.classList.add("visible_td");
      });
    }
    , 200);

    //// GETTING CSS VARIABLE
    // Get the element whose CSS variable you want to access
    const element = document.querySelector('.stats_list_body')!;
    // Get the computed styles of the element
    const styles = window.getComputedStyle(element);
    // Access the value of the CSS variable
    const starting_unscroll_duration_s = styles.getPropertyValue('--unscroll_duration');
    const starting_unscroll_duration_ms = parseFloat(starting_unscroll_duration_s) * (/\ds$/.test(starting_unscroll_duration_s) ? 1000 : 1) // convert to ms

    setTimeout(() => { // only FIRST unscroll should have a delay
      document.querySelector<HTMLElement>(".stats_list_body")!.style.setProperty('--unscroll_duration', '0s');
    }
    ,
    starting_unscroll_duration_ms
    );

  }


  stat() { // calculates stats
    setTimeout(() => {
      this.changement = true;
      let v: number = 0;
      let d: number = 0;
      this.combattants.forEach((c: Combattant) => {
        if (c.gagnant) {
          v++;
        }
        else { d++; }
      })
      this.tauxVictoire = (v / (v + d)) * 100
      console.log("STATS CALCULATED")
    }, 100)
  }

  showStats(){
    document.querySelector("#btn_stats")?.classList.add("showStats");
  }

  hideStats(){
    document.querySelector("#btn_stats")?.classList.remove("showStats");
  }

  // Function to sort table by column
  sortTable(n: number, type: string) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table_stats")! as HTMLTableElement;
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

    // add class to trigger exit animation on click
    exitAnimation() {
      document.querySelector("section")?.classList.add("exitAnimation");
    }
}
