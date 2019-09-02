import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-services/user.service';
import { User } from '../../shared-interfaces/user';
import { slideInAnimation } from 'src/app/shared-interfaces/animation';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    slideInAnimation
  ]
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
  trackByUser(index : number, item : User) : string {
    return item.name;
  }
};
