import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LeaveService} from "../../services/leave.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-applied-leaves',
  templateUrl: './applied-leaves.component.html',
  styleUrls: ['./applied-leaves.component.css']
})
export class AppliedLeavesComponent implements OnInit{
  isAdmin:boolean=false;
  isManager:boolean=false;
  appliedLeaves:any = [];
  constructor(private authService:AuthService, private leaveService:LeaveService, private router:Router) {
    this.isAdmin=authService.isAdmin();
    this.isManager=authService.isManager();
  }

  approveLeave(id:number) {
    this.leaveService.approveLeave(id).subscribe(res => {
      console.log(res)
    });
    alert("Leave approved")
    this.router.navigate(["/applied-leaves"])
  }
  getLeaves(){
    if(this.isAdmin) {
       this.leaveService.getLeavesForAdmin().subscribe(res => {
        // console.log(res)
        this.appliedLeaves = res;
        console.log(this.appliedLeaves)
      });
    }else{
      //
      // this.leaveService.getLeavesForManager().subscribe(res => {
      //   this.appliedLeaves = res;
      //   console.log(this.appliedLeaves)
      // })
    }
  }
  ngOnInit(): void {
   this.getLeaves()
  }
}
