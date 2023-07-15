import {Component, OnInit} from '@angular/core';
import {ProfileDto} from "../../models/profile-dto.model";
import {DashBoardDto} from "../../models/dash-board-dto.model";
import {EmployeeService} from "../../services/employee.service";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  dashBoardDto:DashBoardDto = new DashBoardDto();

  constructor(private employeeService:EmployeeService) {

  }

  ngOnInit(){
    this.getDashboardDetails();
  }
  getDashboardDetails(){
    this.employeeService.getDashboardDto().subscribe(response => {
      this.dashBoardDto = response;
      console.log(this.dashBoardDto)
    })
  }
}
