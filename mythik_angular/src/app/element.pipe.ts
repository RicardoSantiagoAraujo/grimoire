import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'element'
})
export class ElementPipe implements PipeTransform {

  transform(value: string, ): string {

    if(value=="air"){
      return "white"

    }
     if(value=="feu"){
      return "darkred"

    }
    if(value=="terre"){
      return "darkbrown"

    }
    else {
      return "darkblue"
    }
  }

}
