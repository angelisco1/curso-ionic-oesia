import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.page.html',
  styleUrls: ['./nueva-receta.page.scss'],
})
export class NuevaRecetaPage implements OnInit {
  recetaForm: FormGroup
  listaIngredientes: Array<string> = [
    'huevo',
    'patata',
    'aceite',
    'sal',
    'pimentón',
    'cebolla',
    'ajo',
    'tomate',
    'pollo',
    'pavo',
    'champiñón'
  ]


  constructor() {
    this.recetaForm = new FormGroup({
      nombre: new FormControl('Pollo con patatas'),
      tiempoPreparacion: new FormControl(''),
      imagen: new FormControl('https://estoyhechouncocinillas.com/wp-content/uploads/2017/08/pollo-en-salsa.jpg'),
      ingredientes: new FormArray([]),
      pasos: new FormArray([]),
    })
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.recetaForm)
  }

}
