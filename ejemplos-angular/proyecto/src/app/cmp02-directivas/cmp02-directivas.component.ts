import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../cmp03-servicios/logger.service'

interface ISugus {
  color: string,
  sabor: string
}

// [key: string] -> indicamos que las claves son strings pero el nombre que se les da no importa, puede ser cualquier palabra
interface ITranslations {
  [key: string]: string
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

  translations: ITranslations = {
    spanish: 'Hola mundo',
    english: 'Hello world',
    french: 'Salut monde',
    italian: 'Ciao mondo',
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
    // 'italian',
  ]

  langSeleccionado: string = 'italian'


  tarea: any = {
    titulo: 'Tarea 1',
    completada: false
  }

  darkMode: boolean = true

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  completarTarea() {
    this.tarea.completada = !this.tarea.completada
  }

  toggleDarkMode(activado: boolean): void {
    this.darkMode = activado
    this.logger.cambiarModoOscuro(activado)
  }

}
