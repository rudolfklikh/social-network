import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
import { ArrayInterface as Arr } from './array-interface';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {
  private size = 8;


  constructor(private http: HttpClient) { }

  public getUsers()  {
    return this.http.get(`https://randomuser.me/api/?seed=foobar/?inc=gender,name,picture,location&results=${this.size}&nat=gb`)
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
  public setSize(size) {
    this.size = size;
  }
  public getSize() {
    return this.size;
  }

  public getUserByName(name : string) {

    return this.http.get(`https://randomuser.me/api/?seed=foobar/?inc=gender,name,picture,location&results=${this.size}&nat=gb`)
    .pipe(map((response: Arr) => response.results))
    .pipe(map(users => {
      let user =  users.find(user => {
        return `${user.name.first} ${user.name.last}` === name;
      })
      return {
        name: `${user.name.first} ${user.name.last}`,
        image: `${user.picture.large}`,
        street: `${user.location.street}`,
        state: `${user.location.state}`,
        city: `${user.location.city}`
      };
    }))
    
  }
}