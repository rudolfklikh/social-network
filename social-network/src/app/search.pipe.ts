import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(users, value) {
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