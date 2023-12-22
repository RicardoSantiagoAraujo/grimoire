import { Component } from '@angular/core';
import { JoueurComponent } from '../joueur/joueur.component';

@Component({
  selector: 'app-humain',
  templateUrl: './humain.component.html',
  styleUrls: ['./humain.component.css']
})
export class HumainComponent extends JoueurComponent{

}
