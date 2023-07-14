import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterDto} from "../models/register-dto.model";
import {UpdateDto} from "../models/update-dto.model";
import {PageDto} from "../models/page-dto";


interface Employee{

}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   baseUrl = "http://localhost:8080"
  constructor( private http : HttpClient) { }

  getEmployees(pageDto:PageDto): Observable<any> {
    const url = `${this.baseUrl}/employees/all`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(url,pageDto, { headers });
  }

  searchEmployee(searchQuery: string) {
    const url = `${this.baseUrl}/employees/search`;
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<any>(url, searchQuery, {headers});
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
}
