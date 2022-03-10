import { Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';


@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  ubicacion = {
    latitud: 0,
    longitud: 0,
  }

  constructor() { }

  ngOnInit() {
  }

  mostrarUbicacion() {
    Geolocation.getCurrentPosition()
      .then((posicion: Position) => {
        console.log(posicion)
        this.ubicacion.latitud = posicion.coords.latitude
        this.ubicacion.longitud = posicion.coords.longitude
      })
      .catch(err => console.log({err}))
  }

}
