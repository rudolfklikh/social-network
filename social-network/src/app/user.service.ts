import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { ArrayInterface as Arr } from './array-interface';
@Injectable()
export class UserService {
  private size = 8;
  constructor(private http: HttpClient) { }

  private getUsers() {
    return this.http.get(`https://randomuser.me/api/?inc=gender,name,picture,location&results=${this.size}&nat=gb`)
      .pipe(map((response: Arr) => response.results))
      .pipe(map(users => {
        return users.map(user => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            image: `${user.picture.large}`,
            street: `${user.location.street}`,
            state: `${user.location.state}`,
            city: `${user.location.city}`
          };
        })
      }))
  }
  public GetgetUsers() {
    return this.getUsers();
  }
  public setSize(size) {
    this.size = size;
  }
  public getSize() {
    return this.size;
  }
}