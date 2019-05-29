import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthorizationService) { }
  profile;
  ngOnInit() {
    this.getUser();
  }


  getUser() {
    this.auth.getUser().subscribe((user) => {
      this.profile = user;
      console.log(this.profile);
    });
  };

}
