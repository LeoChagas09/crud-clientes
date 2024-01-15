import { Pipe, PipeTransform } from '@angular/core';
import { ICliente } from '../models/cliente-model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: ICliente[], filtro: string): ICliente[] {
    if(!value) return [];
    if(!filtro) return value;

    filtro = filtro.toLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(filtro);
    });
  }

}
