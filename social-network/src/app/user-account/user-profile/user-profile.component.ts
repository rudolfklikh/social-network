import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../shared-services/authorization.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthorizationService) { }
  profile: any;
  ngOnInit() {
    this.getUser();
  }


  getUser() {
    this.auth.getUser().subscribe((user) => {
      this.profile = user;
    });
  }

}
