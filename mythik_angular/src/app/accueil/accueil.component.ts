import { Component, ViewEncapsulation} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.None, // Use None to disable encapsulation and be able to style generated elements
})
export class AccueilComponent {
Admin: boolean = false;

constructor(private authService: AuthService){


}

isAdmin() : boolean{

if(this.authService.getCompte()!.type=="admin"){

  return true
}
else{
  return false;
}

}

}
