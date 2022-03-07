import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-cmp03-servicios',
  templateUrl: './cmp03-servicios.component.html',
  styleUrls: ['./cmp03-servicios.component.css']
})
export class Cmp03ServiciosComponent implements OnInit {
  // private logger: LoggerService;
  modoOscuroActivado: boolean = false

  // Inyectamos el servicio de logger
  constructor(private logger: LoggerService) {
    // this.logger = logger
  }

  ngOnInit(): void {
    this.logger.modoOscuroCambiado$.subscribe((activado: boolean) => {
      console.log('Pasa por aquí')
      this.modoOscuroActivado = activado
    })
  }

  mostrarError(): void {
    this.logger.error('Un mensaje de error...')
  }

  mostrarWarning(): void {
    this.logger.warning('Un mensaje de warning...')
  }

}
