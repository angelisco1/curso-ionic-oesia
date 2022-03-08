import { Component } from '@angular/core';

export interface IUsuario {
  nombre: string;
  apellido: string;
  imagen: string;
  precio: number;
  unidad: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaUsuarios: Array<IUsuario> = [
    { nombre: 'charles', apellido: 'falco', imagen: 'https://bit.ly/kent-c-dodds', precio: 24, unidad: 'h' },
    { nombre: 'octavia', apellido: 'blake', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg', precio: 24, unidad: 'h' },
    { nombre: 'mike', apellido: 'kozinski', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg', precio: 50, unidad: 'd' },
    { nombre: 'arya', apellido: 'stark', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg', precio: 70, unidad: 'proyecto' },
  ]

  simbolo: string = 'EUR'

  constructor() {}

}
