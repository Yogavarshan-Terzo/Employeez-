import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environments";
import {ApplyLeave} from "../models/apply-leave";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  baseUrl=environment.BASIC_URL;
  constructor(private http : HttpClient) { }

  getLeaveInfo(id: any) {
    const url = `${this.baseUrl}/employees/leave-info/${id}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }

  applyLeave(applyLeaveDto: ApplyLeave) {
    const url = `${this.baseUrl}/employees/apply-leave`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(url,applyLeaveDto,{headers}).subscribe(res => {
      console.log(res)
    });
  }

  getLeavesForAdmin() {
    const url = `${this.baseUrl}/employees/applied-leaves`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }

  approveLeave(id: number) {
    const url = `${this.baseUrl}/employees/leave/approve/${id}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }
}
