import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import {PageDto} from "../../models/page-dto";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  pageDto:PageDto=new PageDto();
  totalEmployees: number = 0;
  searchQuery: string="";
  employees: any=[];
  p:  number = 1;
  isRefreshed = false;

  constructor(private authService: AuthService, private employeeService: EmployeeService,private router:Router) {

  }

  ngOnInit() {
    this.employeesCount();
    this.loadEmployees();
  }



  loadEmployees() {
    if(this.searchQuery == "") {
      console.log(this.pageDto)
      console.log(this.p)
      this.employeeService.getEmployees(this.pageDto).subscribe(
        response => {
          console.log("jwt - " + localStorage.getItem("token"))
          if (response) {
            this.employees = response;
            console.log(this.employees);
            // this.totalEmployees = this.countEmployees()
          } else {
            console.error('Failed to retrieve Employee details:', response.msg);
          }
        },
        error => {
          console.error('An error occurred:', error);
        }
      );
    }else {
      this.searchEmployees()
    }
  }

  searchEmployees(){
    if(this.searchQuery !== "") {
      console.log(this.searchQuery)
      this.employees = this.employeeService.searchEmployee(this.searchQuery,this.pageDto).subscribe(
        response => {
          console.log("jwt - " + localStorage.getItem("token"))
          if (response) {
            console.log(response);
            this.employees = response.employees;
            this.totalEmployees = response.size;
          } else {
            console.error('Failed to retrieve Employee details:', response.msg);
          }
        },
        error => {
          console.error('An error occurred:', error);
        })
    }else {
      this.loadEmployees()
    }
  }

  viewEmployee(id:number){
    this.router.navigate(["view",id])
  }

  onPageChange(page: number) {
    this.p = page;
    this.pageDto.offset = page; // Update the currentPage value
    this.loadEmployees(); // Call the loadEmployees() function to fetch the updated page
  }

  private employeesCount() {
    // this.isRefreshed = false;
    this.employeeService.getTotalEmployees().subscribe(response => {
      this.totalEmployees = response;
      // setTimeout(() => this.isRefreshed = true);
      console.log(response)
    })
  }

}
