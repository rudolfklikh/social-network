import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  inputs : ['user']
})
export class UserComponent implements OnInit {
  constructor() { 

  }

  ngOnInit() {
  }

}
