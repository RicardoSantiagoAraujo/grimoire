import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceImage'
})
export class ReduceImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value.includes(".png")){
    return value.replace(".png", "_reduced.png");
  }
  if (value.includes(".jpg")){
    return value.replace(".jpg", "_reduced.jpg");
  }
  return value
  }

}
