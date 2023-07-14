import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  employee:any;
  reportTo:any;
  errorMessage="";
  reportToErrorMessage = "";
   isAdmin:Boolean=false;

  constructor(private route:ActivatedRoute,private employeeServie : EmployeeService,private authService: AuthService,
              private router:Router) {
  }
  ngOnInit(){
    let employeeId = this.route.snapshot.params['id']
    this.employeeServie.getEmployeeById(employeeId).subscribe(response =>{
      console.log(response);
      this.employee = response;
      this.isAdmin = this.authService.isAdmin();
      this.findManager()
    },error => {
      if (error instanceof HttpErrorResponse && error.status === 417 || error.status === 400 || error.status === 404 || error.status === 403) {
        this.errorMessage = "Employee Not Found!";
        console.error('Expectation Failed:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    });
  }

  private findManager() {
    this.employeeServie.getEmployeeById(this.employee.reportTo).subscribe(response => {
      this.reportTo = response;
    },error => {
        if (error instanceof HttpErrorResponse && error.status === 417 || error.status === 400 || error.status === 404 || error.status === 403) {
          this.reportToErrorMessage = "Manager Details Not Found!";
          console.error('Expectation Failed:', error.message);
        } else {
          console.error('An error occurred:', error);
        }
      }
      )
  }

  editEmployee(id:number) {
    this.router.navigate([`/employees/edit/${id}`])
  }
}