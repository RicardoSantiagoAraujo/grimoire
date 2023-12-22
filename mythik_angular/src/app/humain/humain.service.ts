import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnements/environment';
import { Admin, Humain } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HumainService {

  constructor(private http: HttpClient) {
}

findAll(): Observable<Humain[]> {
  return this.http.get<Humain[]>(environment.apiUrl + "/humain");
}

findById(id?: number): Observable<Humain> {
  return this.http.get<Humain>(environment.apiUrl + "/humain/"+id);
}

save(humain: Humain): Observable<Humain> {
  if(humain.id) {
    return this.http.put<Humain>(environment.apiUrl + "/humain/"+humain.id, humain);
  }

  return this.http.post<Humain>(environment.apiUrl + "/humain", humain);
}

delete(id?: number): Observable<void> {
  return this.http.delete<void>(environment.apiUrl + "/humain/"+id);
}
}
