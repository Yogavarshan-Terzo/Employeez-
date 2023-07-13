import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p:number=1;
  isAdmin:Boolean=false;
  isLoggedIn:Boolean=false;
  title = 'employeez';
  constructor(private authService : AuthService) {
    this.isAdmin = authService.isAdmin()
    this.isLoggedIn = authService.isLoggedIn();
  }
}
