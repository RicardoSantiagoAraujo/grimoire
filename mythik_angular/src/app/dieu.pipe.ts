import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dieu'
})
export class DieuPipe implements PipeTransform {

  transform(value: boolean, ): string {

    if(value){
      return "dieu"

    }

    return "creature";
  }

}
