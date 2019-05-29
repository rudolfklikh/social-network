import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { FakeProfileService } from '../fake-profile.service';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent implements OnInit {
  user;
  profile;
  userStats;
  charge: string = 'Follow';
  follow: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private FakeProfileService: FakeProfileService,
  ) {
    // el.toast({html: 'I am a toast!'})
  }

  ngOnInit() {
    this.getUserProfile();
    this.getProfileStats();
    this.getUser();
  }

  public getUserProfile() {
    const name = this.route.snapshot.paramMap.get('name');
    this.userService.getUserByName(name).subscribe(user => {
      this.user = user;
    });
  }
  public getProfileStats() {
    const randomNumber = Math.floor(Math.random() * (this.FakeProfileService.userStats.length - 0) + 0);
    this.userStats = this.FakeProfileService.getProfileStats(randomNumber);
  }
  public Follow() {

    if (this.follow == false) {
      this.userStats.followers++;
      this.charge = 'UnFollow';
      this.follow = true;
    } else {
      this.userStats.followers--;
      this.charge = 'Follow';
      this.follow = false;
    }
  }
}
