import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gagnant'
})
export class GagnantPipe implements PipeTransform {

  transform(value: boolean): string {

    if(value){
      return "Victoire";
    }
    return "Défaite";
  }

}
