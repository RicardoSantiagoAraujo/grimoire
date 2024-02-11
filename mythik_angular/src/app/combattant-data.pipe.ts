import { Pipe, PipeTransform } from '@angular/core';
import { Combattant } from './model';

@Pipe({
  name: 'CombattantData'
})
export class CombattanteDataPipe implements PipeTransform {

  transform(value: Combattant | null, // might return a combattant, or might return null
     ...args: unknown[]): unknown {

    // console.log(typeof(value))

    if (value != null){
    let creature =  value.creature?.nom ;
    let result =  value.gagnant? "winner" : "loser" ;
    let element =  value.creature?.typeElement;
    return creature + ' ' + element + ' ' + result;
    }
    else{
    return "undefined"
    }
  }

}
