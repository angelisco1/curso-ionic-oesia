import { Component, Input, OnInit } from '@angular/core';
import { IReceta, RecetasService } from '../../servicios/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {

  @Input() receta: IReceta;

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {}

  eliminar() {
    this.recetasService.eliminarReceta(this.receta.id)
      .subscribe(() => {
        console.log('Eliminada...')
      })
  }
}
