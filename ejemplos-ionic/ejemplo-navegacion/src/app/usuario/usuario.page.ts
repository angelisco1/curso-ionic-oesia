import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nombre: string = ''

  constructor(private route: ActivatedRoute) {
    // El 'nombre' viene del app-routing.module.ts del parámetro del path (:nombre)
    // this.nombre = route.snapshot.params.nombre
    this.nombre = route.snapshot.paramMap.get('nombre')
    // console.log(this.nombre)
  }

  ngOnInit() {
  }

}
