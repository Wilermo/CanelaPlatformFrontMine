import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './auth/user'; // Asegúrate de que la ruta de importación es correcta

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Método para crear un usuario con un token Bearer
  createUser(user: User, role: string, token: string): Observable<User> {
    const url = `${environment.authURL}/canela/${role}`;

    // Crear los headers necesarios para la autorización
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(url, user, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
