import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanesDto } from '../model/planes-dto';

@Injectable({
  providedIn: 'root',
})
export class InfoPlanesService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  guardarUsuario(nuevoPlan: PlanesDto): Observable<PlanesDto> {
    console.log(nuevoPlan);
    return this.http.post<PlanesDto>(
      'URL_DEL_BACKEND/plan/add',
      nuevoPlan,
      this.httpOptions
    );
  }

  findAll(): Observable<PlanesDto[]> {
    return this.http.get<PlanesDto[]>(`URL_DEL_BACKEND/plan/list`);
  }
}
