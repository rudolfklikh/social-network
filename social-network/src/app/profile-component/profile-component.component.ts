import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {
  users = [];
  user;
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getHero();
  }

  public getHero() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.userService.getUsers().subscribe(users => {
      this.users = users;

      for (let i = 0; i < this.users.length; i++) {

        if (this.users[i].name == name) {
          this.user = this.users[i];
          break;
        }
      }
    })
  }
}
