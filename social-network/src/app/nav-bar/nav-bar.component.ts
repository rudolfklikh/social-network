import { Component, OnInit } from '@angular/core';
import { Sidenav } from 'materialize-css';
import { AuthorizationService } from '../services/authorization.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthorizationService) {
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      const instances = Sidenav.init(elems, {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
      });
    });
  };
  public signOut() {
    this.auth.signOut();
  }
  get user$() {
    return this.auth.user$;
  }
};
