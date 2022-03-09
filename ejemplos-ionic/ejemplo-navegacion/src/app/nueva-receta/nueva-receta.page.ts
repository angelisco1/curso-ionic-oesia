import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from '../servicios/recetas.service';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.page.html',
  styleUrls: ['./nueva-receta.page.scss'],
})
export class NuevaRecetaPage implements OnInit {
  recetaForm: FormGroup
  listaIngredientes: Array<any> = [
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


  constructor(private recetasService: RecetasService, private router: Router) {
    this.recetaForm = new FormGroup({
      nombre: new FormControl('Pollo con patatas', Validators.required),
      tiempoPreparacion: new FormControl(''),
      imagen: new FormControl('https://estoyhechouncocinillas.com/wp-content/uploads/2017/08/pollo-en-salsa.jpg'),
      ingredientes: new FormArray([]),
      pasos: new FormArray([
        new FormControl('Lorem ipsum dolor sit amet consectetur adipisicing elit.'),
        new FormControl('Molestiae ab itaque inventore quod repudiandae porro iure culpa harum aut? Aliquam magni maxime pariatur minima, minus cumque.')
      ]),
    })
  }

  ngOnInit() {
  }

  addIngrediente(ingrediente: string): void {
    // const ingredienteBuscado = this.listaIngredientes.find(i => i.nombre === ingrediente)
    // if (ingredienteBuscado) {
    //   ingredienteBuscado.checked = !ingredienteBuscado.checked
    // }
    const ingredientesFormArray = this.recetaForm.get('ingredientes') as FormArray

    if (ingredientesFormArray.value.includes(ingrediente)) {
      const pos = ingredientesFormArray.value.findIndex(i => i === ingrediente)
      ingredientesFormArray.removeAt(pos)
    } else {
      ingredientesFormArray.push(new FormControl(ingrediente))
    }
  }

  guardar() {
    console.log(this.recetaForm)
    this.recetasService.crearReceta(this.recetaForm.value)
      .subscribe((resp) => {
        console.log(resp)
        this.router.navigateByUrl('/recetas', { replaceUrl: true })
      })
  }

}
