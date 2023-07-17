import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterDto} from "../models/register-dto.model";
import {UpdateDto} from "../models/update-dto.model";
import {PageDto} from "../models/page-dto";
import {setParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
import {environment} from "../environments/environments";


interface Employee{

}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   baseUrl = "http://localhost:8080"
  constructor( private http : HttpClient) { }

  getEmployees(pageDto:PageDto): Observable<any> {
    const url = `${this.baseUrl}/employees/${pageDto.offset}/${pageDto.field}/${pageDto.direction}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url, { headers });
  }

  searchEmployee(searchQuery: string,pageDto:PageDto) {
    const url = `${this.baseUrl}/employees/${searchQuery}/${pageDto.offset}/${pageDto.field}/${pageDto.direction}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url, {headers});
  }

  getEmployeeById(employeeId: any) {
    const url = `${this.baseUrl}/employees/${employeeId}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url, {headers});
  }

  addEmployee(registerDto: RegisterDto) {
     console.log(registerDto);
    const url = `${this.baseUrl}/employees`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(url, registerDto,{headers});
  }

  getEmployeeByIdForEdit(employeeId: any) {
    const url = `${this.baseUrl}/employees/edit/${employeeId}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }

  updateEmployee(updateDto: UpdateDto) {
     console.log(updateDto)
    const url = `${this.baseUrl}/employees/edit`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.put<any>(url, updateDto,{headers});
  }

  getTotalEmployees() {
    const url = `${this.baseUrl}/employees/count`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }

  getDashboardDto() {
    const url = `${this.baseUrl}/dashboard`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<any>(url,{headers});
  }

  fetchManagers() {
     let managers:any=[];
    if(localStorage.getItem("managers")){
      managers = localStorage.getItem("managers")
    }
     else{
       const url = `${this.baseUrl}/managers`;
      const jwtToken = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
      this.http.get<any>(url,{headers}).subscribe(response => {
        managers = JSON.stringify(response);
        localStorage.setItem("managers",managers);
      });
    }return managers;
     }


  fetchDepartments() {
     let departments:any=[];
     if(localStorage.getItem("departments")){
       departments = localStorage.getItem("departments");
     }else{
       const url = `${this.baseUrl}/department`;
       const jwtToken = localStorage.getItem('token');
       const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
       this.http.get<any>(url,{headers}).subscribe(response => {
         departments = JSON.stringify(response);
         localStorage.setItem("departments",departments);
       });
     }return departments;
  }
  fetchTeams() {
      const url = `${this.baseUrl}/teams`;
      const jwtToken = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
       return this.http.get<any>(url, {headers});
  }

  deleteEmployee(id: number) {
     console.log("id for delete :"+id)
    const url = `${this.baseUrl}/employees/${id}`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.delete<any>(url, {headers});
  }

  getProfileDto() {
    let profileDto:any=[];
    if(localStorage.getItem("profileDto")){
      profileDto = localStorage.getItem("profileDto");
    }else{
      const url = `${this.baseUrl}/profileDto`;
      const jwtToken = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
      this.http.get<any>(url,{headers}).subscribe(response => {
        profileDto = JSON.stringify(response);
        localStorage.setItem("profileDto",profileDto);
      });
    }return profileDto;
  }

  getProfileDetails() {
    let profileDetails:any=[];
    if(localStorage.getItem("profileDetails")){
      profileDetails = localStorage.getItem("profileDetails");
    }else{
      const url = `${this.baseUrl}/employees/profileDetails`;
      const jwtToken = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
      this.http.get<any>(url,{headers}).subscribe(response => {
        profileDetails = JSON.stringify(response);
        localStorage.setItem("profileDetails",profileDetails);
      });
    }return profileDetails;
  }
}
