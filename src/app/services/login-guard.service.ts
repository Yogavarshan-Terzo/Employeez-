import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private authService:AuthService,private router:Router) { }

  private isLoggedIn = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn){
      return true;
    }else {
      this.router.navigate(["/login"])
      return true;
    }
  }
}
