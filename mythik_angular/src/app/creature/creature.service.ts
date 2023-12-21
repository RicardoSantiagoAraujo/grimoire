import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creature } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Creature[]> {
    return this.http.get<Creature[]>("http://localhost:8080/api/creature");
  }

  findById(id?: number): Observable<Creature> {
    return this.http.get<Creature>("http://localhost:8080/api/creature/"+id);
  }

  create(creature: Creature): Observable<Creature> {
    return this.http.post<Creature>("http://localhost:8080/api/creature", creature);
  }

  update(creature: Creature): Observable<Creature> {
    return this.http.put<Creature>("http://localhost:8080/api/creature/"+creature.id, creature);
  }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>("http://localhost:8080/api/creature/"+id);
  }
}
