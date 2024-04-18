import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPermisoDto } from '../model/usuario-permiso-dto';

@Injectable({
  providedIn: 'root',
})
export class PermisosUsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<UsuarioPermisoDto[]> {
    return this.http.get<UsuarioPermisoDto[]>(
      'https://rootcanelamicroservice-production.up.railway.app/canelaUser/getUsers'
    );
  }
}
