import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})

export class AppComponent {
  users = [];

  constructor(public userService : UserService) {}

  ngOnInit() {
    this.userService.GetgetUsers().subscribe(users => {
      this.users = users;
    });
  }
}
