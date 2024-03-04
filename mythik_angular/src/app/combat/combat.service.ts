import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Combat, Combattant, Creature} from '../model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environnements/environment';
import { AudioService } from '../audio.service';

@Injectable({
  providedIn: 'root'
})
export class CombatService implements OnInit, OnDestroy{
    constructor(private http: HttpClient, public audioService: AudioService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

    findAll(): Observable<Combat[]> {
      return this.http.get<Combat[]>("http://localhost:8080/api/combat");
    }

    findById(id?: number): Observable<Combat> {
      return this.http.get<Combat>("http://localhost:8080/api/combat/"+id);
    }

    save(combat: Combat): Observable<Combat> {
        if(combat.id) {
          return this.http.put<Combat>(environment.apiUrl + "/combat/"+combat.id, combat);
        }

        return this.http.post<Combat>(environment.apiUrl + "/combat", combat);
      }

    delete(id?: number): Observable<void> {
      return this.http.delete<void>("http://localhost:8080/api/combat/"+id);
    }

}