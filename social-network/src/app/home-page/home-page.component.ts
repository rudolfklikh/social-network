import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users = [];

  constructor(public userService : UserService) { }

  ngOnInit() {
    this.userService.GetgetUsers().subscribe(users => {
        this.users = users;
        console.log(this.users);
  }); 
  };
};
