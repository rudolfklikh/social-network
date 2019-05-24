import { Pipe, PipeTransform } from '@angular/core';
import { ArrayInterface } from './array-interface';
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(users : ArrayInterface, value : string) {
        value = value.toLowerCase();

        if (value === undefined) {
            return users;
        } else {
            return users.filter(user => {
                return user.name.toLowerCase().includes(value);
            });
        }
    }
}