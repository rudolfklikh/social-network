import { Pipe, PipeTransform } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(city: string, args?: any): string {
    let newArr = [];
    
    if (city === undefined) {
      return args;
    }
    let arrProperty = city.split(' ').forEach((element) => {
      newArr.push(`${element.charAt(0).toUpperCase()}${element.slice(1)}`);
    });
     
    return newArr.join(' ');
  }

}
