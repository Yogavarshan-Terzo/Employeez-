import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   jwtHelper = new JwtHelperService();
  constructor(private http:HttpClient,private router:Router) { }
  baseUrl:string="http://localhost:8080/"
  proceedLogin(loginDto:any):Observable<any> {
    return this.http.post(`${this.baseUrl}login`, loginDto);
  }

  ngOnInit(){
    this.isAdmin()
    this.isLoggedIn()
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["login"]).then(() => {window.location.reload()});
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

  isAdmin(){
    const token = localStorage.getItem("token");
    let jwt : string="";
    if(token){
       jwt = token;
    }else{
      this.router.navigate(["/login"]);
      return false
    }
    const decodedToken = this.jwtHelper.decodeToken(jwt);
    const authority = decodedToken.roles[0].authority;
    console.log(authority)
    if(authority === "ROLE_ADMIN")return true;
    return false
  }

   getToken() {
    let token = localStorage.getItem("token");
    if(token){
      return token;
    }else{
      this.router.navigate(["login"]).then(() => {window.location.reload})
      return "User not authenticated"
    }
  }

}

