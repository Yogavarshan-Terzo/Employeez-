import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate{

  constructor(private router:Router,private authService:AuthService) { }
  private isLoggedIn = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn){
      return true;
    }else {
      this.router.navigate(["/forbidden"])
      return true;
    }
  }
}
