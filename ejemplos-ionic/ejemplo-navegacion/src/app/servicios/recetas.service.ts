import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  recetaEliminada$ = new EventEmitter<number>()

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<Array<IReceta>> {
    return this.http.get<Array<IReceta>>(`${environment.urlBase}/recetas`)
    // this.http.get(environment.urlBase + '/recetas')
  }

  crearReceta(nuevaReceta: IReceta): Observable<IReceta> {
    console.log('PASA')
    return this.http.post<IReceta>(`${environment.urlBase}/recetas`, nuevaReceta)
  }

  eliminarReceta(id: number): Observable<any> {
    return this.http.delete(`${environment.urlBase}/recetas/${id}`)
      .pipe(
        tap((datos) => this.recetaEliminada$.emit(id)),
      )
  }

}
