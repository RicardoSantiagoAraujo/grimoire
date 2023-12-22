import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnements/environment';
import { IA } from '../model';

@Injectable({
  providedIn: 'root'
})
export class IAService {

  constructor(private http: HttpClient) {
}

findAll(): Observable<IA[]> {
  return this.http.get<IA[]>(environment.apiUrl + "/ia");
}

findById(id?: number): Observable<IA> {
  return this.http.get<IA>(environment.apiUrl + "/ia/"+id);
}

save(ia: IA): Observable<IA> {
  if(ia.id) {
    return this.http.put<IA>(environment.apiUrl + "/ia/"+ia.id, ia);
  }

  return this.http.post<IA>(environment.apiUrl + "/ia", ia);
}

delete(id?: number): Observable<void> {
  return this.http.delete<void>(environment.apiUrl + "/ia/"+id);
}
}

