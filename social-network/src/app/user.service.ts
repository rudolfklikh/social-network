import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';



@Injectable()
export class UserService {
   constructor(private http: HttpClient) {}

    private getUsers()  {
        return this.http.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb`)
        .pipe(map(response => response.results ))
        .pipe(map(users => {
          return users.map(user => {
            return {
              name : `${user.name.first} ${user.name.last}`,
              image: `${user.picture.medium}`,
              geo : `${user.location.city} ${user.location.state} ${user.location.street}`
            };
          })
       }))
    } 
    public GetgetUsers() {
        return this.getUsers();
    }
}