import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  //{path:'',component:DepartmentListComponent},
  {path:'',redirectTo:'/department',pathMatch:'full'},
  {path:'department',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:'department/:deptid/:deptname', component:DepartmentDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeListComponent, DepartmentListComponent,DepartmentDetailComponent ]