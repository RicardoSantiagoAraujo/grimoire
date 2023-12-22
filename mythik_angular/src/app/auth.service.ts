
import { Injectable } from '@angular/core';
import { Compte } from './model';
import { Router } from '@angular/router';
import { environment } from 'src/environnements/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private compte?: Compte = undefined;

  constructor(private http:HttpClient, private router: Router) { }

  login(login: string, password: string) {
    return this.http.post<Compte>(environment.apiUrl + `/connexion`, { "login": login, "password": password}).subscribe((resp) => {
      this.compte = resp;
      localStorage.setItem("compte", JSON.stringify(this.compte));

      this.router.navigate(["/acceuil"]);
    });
  }

  logout() {
    this.compte = undefined;
    localStorage.removeItem("compte");
  }

  isLogged(): boolean {
    return this.getCompte() != undefined;
  }

  getCompte(): Compte | undefined{
    if(this.compte) {
      return this.compte;
    } else {
      const compte = localStorage.getItem("compte")
      if(compte) {
        return JSON.parse(compte);
      }
    }

    return undefined;
  }

}
