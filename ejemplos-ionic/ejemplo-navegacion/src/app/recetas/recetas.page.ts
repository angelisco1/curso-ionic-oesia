import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IReceta, RecetasService } from '../servicios/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage {
  recetas: Array<IReceta> = []

  constructor(private recetasService: RecetasService, private toastCtrl: ToastController) { }

  ionViewDidEnter() {
    this.recetasService.recetaEliminada$
      .subscribe((idReceta: number) => {
        this.recetas = this.recetas.filter(r => r.id !== idReceta)
      })

    this.recetasService.getRecetas()
      .subscribe({
        next: (recetas: Array<IReceta>) => {
          this.recetas = recetas
        },
        error: (err) => {
          // this.recetas = []
          this.mostrarToast()
        }
      })
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'No se han podido obtener las recetas',
      duration: 1500,
      color: 'danger'
    })
    await toast.present()
  }

}
