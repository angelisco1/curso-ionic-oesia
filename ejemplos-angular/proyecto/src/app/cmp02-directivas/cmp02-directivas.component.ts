import { Component, OnInit } from '@angular/core';

interface ISugus {
  color: string,
  sabor: string
}

@Component({
  selector: 'app-cmp02-directivas',
  templateUrl: './cmp02-directivas.component.html',
  styleUrls: ['./cmp02-directivas.component.css']
})
export class Cmp02DirectivasComponent implements OnInit {
  sugus: ISugus = {
    color: 'red',
    sabor: 'fresa'
  }

  listaSugus: Array<ISugus> = [
    this.sugus,
    { color: 'blue', sabor: 'piña' },
    { color: 'yellow', sabor: 'limón' },
    { color: 'orange', sabor: 'naranja' },
  ]

  listaLang: Array<string> = [
    'spanish',
    'french',
    'english',
    'italian',
  ]

  langSeleccionado: string = 'italian'


  tarea: any = {
    titulo: 'Tarea 1',
    completada: false
  }

  darkMode: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  completarTarea() {
    this.tarea.completada = !this.tarea.completada
  }

  toggleDarkMode(activado: boolean): void {
    this.darkMode = activado
  }

}
