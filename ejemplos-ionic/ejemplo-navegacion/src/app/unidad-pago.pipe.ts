import { Pipe, PipeTransform } from '@angular/core';

// Se genera con el comando:
// ionic g p unidad-pago

@Pipe({
  name: 'unidadPago'
})
export class UnidadPagoPipe implements PipeTransform {

  transform(value: string, unidad: string = 'h'): string {
    const simbolo = value.slice(0, 1)
    const precio = value.slice(1)
    return precio + simbolo + '/' + unidad
  }

}
