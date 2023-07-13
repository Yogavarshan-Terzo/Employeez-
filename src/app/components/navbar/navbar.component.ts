import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn:Boolean=false;
  isAdmin:Boolean=false;
  constructor(private authService : AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
    this.isAdmin=authService.isAdmin();
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin=this.authService.isAdmin();
  }
  logout(){
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
