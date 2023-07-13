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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesListComponent,
    ViewComponent,
    AddEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    LoginComponent,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
