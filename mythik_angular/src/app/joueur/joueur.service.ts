import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnements/environment';
import { IA, Joueur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http: HttpClient) {
}

findAll(): Observable<Joueur[]> {
  return this.http.get<Joueur[]>(environment.apiUrl + "/joueur");
}

findById(id?: number): Observable<Joueur> {
  return this.http.get<Joueur>(environment.apiUrl + "/joueur/"+id);
}

save(joueur: Joueur): Observable<Joueur> {
  if(joueur.id) {
    return this.http.put<Joueur>(environment.apiUrl + "/joueur/"+joueur.id, joueur);
  }

  return this.http.post<Joueur>(environment.apiUrl + "/joueur", joueur);
}

delete(id?: number): Observable<void> {
  return this.http.delete<void>(environment.apiUrl + "/joueur/"+id);
}
}

