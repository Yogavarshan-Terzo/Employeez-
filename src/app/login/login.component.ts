import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../MaterialModule";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';


interface LoginModel{
  email?: string;
  password?: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  jwtHelper = new JwtHelperService();
  loginModel: LoginModel = {};
  responseMessage:string = "";
  errorMessage:string = "";
  constructor(private service:AuthService,private router: Router){}
  proceedLogin(){
     this.service.proceedLogin(this.loginModel).subscribe( response => {
       if(response.status === "OK"){
         const jwt = response.data.jwt;
         localStorage.setItem("token",jwt);
         console.log(this.service.isAdmin())
         this.responseMessage = "Login Successful";
         this.router.navigate(["dashboard"]).then(() => {window.location.reload()});
       }else {
         this.errorMessage = response.msg;
       }
    },error => {
       if (error instanceof HttpErrorResponse && error.status === 417 || error.status === 400 || error.status === 404 || error.status === 403) {
         this.errorMessage = "Invalid Credentials!";
         console.error('Expectation Failed:', error.message);
       } else {
         console.error('An error occurred:', error);
       }
    });
  }
}
