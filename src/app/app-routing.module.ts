import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {EmployeesListComponent} from "./components/employees-list/employees-list.component";
import {ViewComponent} from "./components/view/view.component";
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {EditComponent} from "./components/edit/edit.component";
import {AdminAuthGuardService} from "./services/admin-auth-guard.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"employees",component: EmployeesListComponent},
  {path:"view/:id",component:ViewComponent},
  {path:"employees/edit/:id",component:EditComponent,canActivate:[AdminAuthGuardService]},
  {path:"employees/add",component:AddEmployeeComponent,canActivate:[AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
