import { Component } from '@angular/core';
import {ApplyLeaveDto} from "../../models/apply-leave-dto";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  applyLeaveDto:ApplyLeaveDto = new ApplyLeaveDto();
  applyLeave() {

  }
}
