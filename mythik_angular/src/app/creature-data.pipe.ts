import { Pipe, PipeTransform } from '@angular/core';
import { Creature } from './model';

@Pipe({
  name: 'creatureData'
})
export class CreatureDataPipe implements PipeTransform {

  transform(value: Creature | null, // might return a creature, or might return null
     ...args: unknown[]): unknown {

    console.log(typeof(value))

    if (value != null){
    let mythology =  value.mythologie ;
    let element =  value.typeElement ;
    let god =  value.dieu? "dieu" : "creature" ;
    return mythology + ' ' + element + ' ' + god;
    }
    else{
    return "undefined"
    }
  }

}
