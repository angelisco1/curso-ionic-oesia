import { Component, OnInit } from '@angular/core';
import { IReceta, RecetasService } from '../servicios/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  recetas: Array<IReceta> = []

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {
    this.recetasService.getRecetas()
      .subscribe((recetas: Array<IReceta>) => {
        this.recetas = recetas
      })
  }

}
