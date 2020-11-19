import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notas'
})
export class NotasPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    if(value >= 1 && value < 4) {
      return 'Desaprobado';
    } else if (value >=4 && value < 6) {
      return 'Aprobado'
    } else if (value >=6 && value <= 10){
      return 'Promocionado'
    }

    return 'Nota Errónea';
  }


}
