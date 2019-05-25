import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {


  private _user : User ;
  constructor() { 

  }

  @Input() set user(user : User) {
    this._user = user;
  }
  
  
  get user() : User {
    return this._user;
  } 
  ngOnInit() {
  }

}
