import { Component } from '@angular/core';
import {UpdateDto} from "../../models/update-dto.model";
import {ActivatedRoute, Router} from "@angular/router";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {EmployeeService} from "../../services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updateDto:UpdateDto = new UpdateDto();
  newPassword:string="";
  confirmPassword:string="";
  errorMessage:string="";
  employeeId:number=0;
  passwordErrorMessage:string="";
  constructor(private route:ActivatedRoute,
              private employeeService:EmployeeService,
              private router:Router) {
  }
  ngOnInit(){
    this.employeeId = this.route.snapshot.params['id']
    this.employeeService.getEmployeeByIdForEdit(this.employeeId).subscribe(response => {
      this.updateDto = response
    },error => {
      if (error instanceof HttpErrorResponse && error.status === 417 || error.status === 400 || error.status === 404 || error.status === 403) {
        this.errorMessage = "Employee Not Found!";
        console.error('Expectation Failed:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    });
  }


  updateEmployee() {
    if(this.newPassword !== ""){
      if(this.newPassword !== this.confirmPassword){
        this.passwordErrorMessage="Passwords do not match"
        this.router.navigate([`/employees/edit/${this.employeeId}`])
        return;
      }
      else{
        this.updateDto.password = this.newPassword;
      }
    }
      this.employeeService.updateEmployee(this.updateDto).subscribe(response => {
        console.log(response)
        alert("Details Updated Successfully");
        this.router.navigate(["/employees"])
      }, error => {
        if (error instanceof HttpErrorResponse && error.status === 417 || error.status === 400 || error.status === 404 || error.status === 403) {
          this.errorMessage = "Update Failed";
          console.error('Expectation Failed:', error.message);
        } else {
          console.error('An error occurred:', error);
        }
      });
    }
}
