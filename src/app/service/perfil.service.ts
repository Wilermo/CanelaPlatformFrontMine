import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilDto } from '../model/perfil-dto';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private apiUrl = 'http://localhost:8080/api/BACKEND';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<PerfilDto>(`http://localhost:8080/users/{id}`);
  }

  modificarPerfil(perfil: PerfilDto): Observable<PerfilDto> {
    return this.http.put<PerfilDto>(
      `http://localhost:8080/bus/edit`,
      perfil,
      this.httpOptions
    );
  }
}
