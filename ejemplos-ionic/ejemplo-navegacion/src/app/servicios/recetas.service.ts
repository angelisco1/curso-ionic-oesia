import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IReceta {
  id: number,
  nombre: string,
  pasos: Array<string>,
  tiempoPreparacion: string,
  imagen: string,
  ingredientes: Array<string>,
}

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<Array<IReceta>> {
    return this.http.get<Array<IReceta>>(`${environment.urlBase}/recetas`)
    // this.http.get(environment.urlBase + '/recetas')
  }

}
