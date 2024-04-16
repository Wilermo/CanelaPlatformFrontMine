import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPermisoDto } from '../model/usuario-permiso-dto';
import { UsuarioRegistroDto } from '../model/usuario-registro-dto';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  guardarUsuario(
    nuevoUsuario: UsuarioRegistroDto
  ): Observable<UsuarioRegistroDto> {
    console.log(nuevoUsuario);
    return this.http.post<UsuarioRegistroDto>(
      'hURL_DEL_BACKEND/usuario/add',
      nuevoUsuario,
      this.httpOptions
    );
  }
}
