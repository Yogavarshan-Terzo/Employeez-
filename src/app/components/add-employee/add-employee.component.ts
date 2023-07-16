import {Component, OnInit} from '@angular/core';
import {RegisterDto} from "../../models/register-dto.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {readSpanComment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  confirmPassword:string=""
  registerDto:RegisterDto=new RegisterDto();
  errorMessage:string="";
  departments:any[] = [];
  managers:any[]=[];
  teams:any[]=[];
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

  ngOnInit(): void {
    this.fetchDepartments();
    this.fetchManagers();
    this.fetchTeams();
  }
  fetchDepartments(){
     this.departments = JSON.parse(this.employeeService.fetchDepartments());
  }
  fetchManagers(){
    this.managers = JSON.parse(this.employeeService.fetchManagers());
  }
  fetchTeams(){
    this.employeeService.fetchTeams().subscribe(response => {
      this.teams = response;
    });
  }
}
