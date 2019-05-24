import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(city: string, args?: any): string {

    if (city === undefined) {
      return args;
    }

    return `${city.charAt(0).toUpperCase()}${city.slice(1)}`;
  }

}
