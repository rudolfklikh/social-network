import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService }  from '../user.service';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {
  user;
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getUserProfile();
  }

  public getUserProfile() {
    const name = this.route.snapshot.paramMap.get('name'); 
    this.userService.getUserByName(name).subscribe(user => {
      this.user = user;
    });
  }
}
