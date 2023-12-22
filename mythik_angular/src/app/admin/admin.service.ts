import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnements/environment';
import { Admin } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
}

findAll(): Observable<Admin[]> {
  return this.http.get<Admin[]>(environment.apiUrl + "/admin");
}

findById(id?: number): Observable<Admin> {
  return this.http.get<Admin>(environment.apiUrl + "/admin/"+id);
}

save(admin: Admin): Observable<Admin> {
  if(admin.id) {
    return this.http.put<Admin>(environment.apiUrl + "/admin/"+admin.id, admin);
  }

  return this.http.post<Admin>(environment.apiUrl + "/admin", admin);
}

delete(id?: number): Observable<void> {
  return this.http.delete<void>(environment.apiUrl + "/admin/"+id);
}
}
