import { Injectable } from "@angular/core";
import { Compte } from "../model";
import { Observable } from "rxjs";
import { environment } from "../../environnements/environment";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: 'root'
  })

export class CompteService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<Compte[]> {
      return this.http.get<Compte[]>(environment.apiUrl + "/compte");
    }
  
    findById(id?: number): Observable<Compte> {
      return this.http.get<Compte>(environment.apiUrl + "/compte/"+id);
    }
  
    save(compte: Compte): Observable<Compte> {
      if(compte.id) {
        return this.http.put<Compte>(environment.apiUrl + "/compte/"+compte.id, compte);
      }
  
      return this.http.post<Compte>(environment.apiUrl + "/compte/humain", compte);
    }
  
    delete(id?: number): Observable<void> {
      return this.http.delete<void>(environment.apiUrl + "/compte/"+id);
    }

}