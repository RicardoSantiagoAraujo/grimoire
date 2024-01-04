import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combattant, Compte } from '../model';
import { environment } from 'src/environnements/environment';

@Injectable({
  providedIn: 'root'
})
export class CombattantService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Combattant[]> {
    return this.http.get<Combattant[]>(environment.apiUrl + "/combattant");
  }

  findById(id?: number): Observable<Combattant> {
    return this.http.get<Combattant>(environment.apiUrl + "/combattant/"+id);
  }

  findByCompte(compte?: Compte): Observable<Combattant[]> {
    return this.http.get<Combattant[]>(environment.apiUrl + "/statistique");
  }


  save(combattant: Combattant): Observable<Combattant>{
    
    
      if(combattant.id) {
        return this.http.put<Combattant>(environment.apiUrl + "/combattant/"+combattant.id, combattant);
        
      }
  
      return this.http.post<Combattant>(environment.apiUrl + "/combattant", combattant);
    
  
  
    }
 

  delete(id?: number): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + "/combattant/"+id);
  }
}
