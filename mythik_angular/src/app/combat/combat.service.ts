import { Injectable } from '@angular/core';
import { Combattant, Creature} from '../model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environnements/environment';

@Injectable({
  providedIn: 'root'
})
export class CombatService {


constructor(private http: HttpClient) {}

getCombattants(): Observable<Combattant[]> {
  return this.http.get<Combattant[]>(environment.apiUrl + "/combattant");
}

}