import { Component } from '@angular/core';

export interface IUsuario {
  nombre: string,
  apellido: string,
  imagen: string,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaUsuarios: Array<IUsuario> = [
    { nombre: 'charles', apellido: 'falco', imagen: 'https://bit.ly/kent-c-dodds' },
    { nombre: 'octavia', apellido: 'blake', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg' },
    { nombre: 'mike', apellido: 'kozinski', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg' },
    { nombre: 'arya', apellido: 'stark', imagen: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg' },
  ]

  constructor() {}

}
