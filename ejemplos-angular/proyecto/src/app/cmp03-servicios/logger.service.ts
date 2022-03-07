import { EventEmitter, Injectable } from '@angular/core';

// Generar el servicio:
// ng g s cmp03-servicios/logger

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  modoOscuroCambiado$ = new EventEmitter<boolean>()

  constructor() { }

  error(msg: string): void {
    console.error(`[ERROR] - ${msg}`)
  }

  warning(msg: string): void {
    console.warn(`[WARNING] - ${msg}`)
  }

  cambiarModoOscuro(activado: boolean) {
    this.modoOscuroCambiado$.emit(activado)
  }
}
