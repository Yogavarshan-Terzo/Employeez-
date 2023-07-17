import {Component, OnInit} from '@angular/core';
import {ApplyLeave} from "../../models/apply-leave";
import {LeaveService} from "../../services/leave.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit{
  applyLeaveDto:ApplyLeave = new ApplyLeave();
  leaveInfoId=0;
  employeeId=0;
  leaveInfo:any;
  constructor(private leaveService:LeaveService,private route:ActivatedRoute, private location:Location) {
  }
  ngOnInit(){
    this.getLeaveInfo();
    this.getEmployeeInfo();
  }
  getLeaveInfo(){
    this.leaveInfoId = this.route.snapshot.params["id"]
    this.leaveService.getLeaveInfo(this.leaveInfoId).subscribe(response => {
      this.leaveInfo = response;
      console.log(response);
    });
    console.log(this.leaveInfo)
  }
  getEmployeeInfo(){
    this.employeeId = this.route.snapshot.params["employeeId"]
  }
  goBack() {
    this.location.back();
  }

  applyLeave() {
    this.applyLeaveDto.leaveInfoId = this.leaveInfoId;
    this.applyLeaveDto.employeeId = this.employeeId;
    console.log(this.applyLeaveDto)
    this.leaveService.applyLeave((this.applyLeaveDto));
    alert("Time off applied successfully")
    this.goBack();
  }
}
