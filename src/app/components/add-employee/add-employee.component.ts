import { Component } from '@angular/core';
import {RegisterDto} from "../../models/register-dto.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  confirmPassword:string=""
  registerDto:RegisterDto=new RegisterDto();
  errorMessage:string="";
  constructor(private employeeService:EmployeeService,private router:Router) {
  }
  addEmployee() {
    console.log(this.registerDto)
     this.employeeService.addEmployee(this.registerDto).subscribe(response =>{
     console.log(response)
     alert("Employee added successfully")},error => {
      if (error instanceof HttpErrorResponse && error.status >= 400) {
        this.errorMessage = "Employee Not Found!";
        console.error('Expectation Failed:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    });

    this.router.navigate(["/employees"])
  }
}
