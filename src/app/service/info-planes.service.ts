import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanesDto } from '../model/planes-dto';

@Injectable({
  providedIn: 'root',
})
export class InfoPlanesService {
  private apiUrl = 'http://localhost:3000/api/planes'; 
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  guardarUsuario(nuevoPlan: PlanesDto): Observable<PlanesDto> {
    console.log(nuevoPlan);
    return this.http.post<PlanesDto>(
      `${this.apiUrl}/add`, 
      nuevoPlan,
      this.httpOptions
    );
  }

  findAll(): Observable<PlanesDto[]> {
    return this.http.get<PlanesDto[]>(`${this.apiUrl}`); 
  }

  getPlanes(): Observable<PlanesDto[]> {
    return this.http.get<PlanesDto[]>(this.apiUrl, this.httpOptions);
  }
}
