import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginComponent} from "./login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import {FormsModule} from "@angular/forms";
import { ViewComponent } from './components/view/view.component';
import {NgxPaginationModule} from "ngx-pagination";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditComponent } from './components/edit/edit.component';
import { LeaveComponent } from './components/leave/leave.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesListComponent,
    ViewComponent,
    AddEmployeeComponent,
    EditComponent,
    LeaveComponent,
    HolidayComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    LoginComponent,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ],
  providers: [],
  exports: [
    LeaveComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

