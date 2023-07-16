import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLoggedIn:Boolean=false;
  isAdmin:Boolean=false;
  constructor(private authService : AuthService,private router:Router) {
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

  goToProfile() {
    this.router.navigate(["/profile"]).then(()=> {
      window.location.reload()
    })
  }
}
