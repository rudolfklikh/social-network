import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
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
