import { Component, OnInit } from '@angular/core';
import { UserService } from './shared-services/user.service';
import { slideInAnimation } from './shared-interfaces/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
