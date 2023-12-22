import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
Admin: boolean = false; 

constructor(private authService: AuthService){}

isAdmin() : boolean{

if(this.authService.getCompte()!.typeCompte == "admin"){

  return true
}
else{
  return false; 
}
 
}

}
