import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-services/user.service';
import { slideInAnimation } from 'src/app/shared-interfaces/animation';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class SetupComponent implements OnInit {
  size;
  constructor(private UserService : UserService) { 
  }

  onChange() {
    this.UserService.setSize(+this.size);
  }
  ngOnInit() {
    this.size = this.UserService.getSize();
  }

}
