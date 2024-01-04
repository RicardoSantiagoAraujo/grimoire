import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mythologie'
})
export class MythologiePipe implements PipeTransform {

  transform(value: string): string {
    if(value=="egyptienne"){
      return "darkyellow"

    }
     if(value=="grec"){
      return "lightgreen"

    }
    if(value=="chinoise"){
      return "lightred"

    }
    else {
      return "lightblue"
    }
  }

}
