import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProfileDto} from "../../models/profile-dto.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  activeTab = 'personal';
  profileDto:any;
  profileDetails:any;

  constructor(private employeeService:EmployeeService,private router:Router,private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.getProfileDto();
    this.getProfileDetails();
  }
  getProfileDto(){
    this.profileDto = JSON.parse(this.employeeService.getProfileDto());
      // window.location.reload();
  }
  switchTab(tab: string) {
    this.activeTab = tab;
  }
  getProfileDetails(){
    this.profileDetails = JSON.parse(this.employeeService.getProfileDetails());
  }
  viewEmployee(managerId: any) {
    this.router.navigate(["view",managerId])
  }
}
