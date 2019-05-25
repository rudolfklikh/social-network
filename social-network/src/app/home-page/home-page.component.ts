import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users = [];
  searchStr : string  = '';
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => { 
      this.users = users;
    });
  };
  trackByUser(index : number, item : User) : {first : string, last : string} {
    return item.name;
  }
};
