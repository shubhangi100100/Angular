import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProjectConfigComponent } from './admin/project-config/project-config.component';
import { ProjectAllocationComponent } from './admin/project-allocation/project-allocation.component';
import { DeoDashboardComponent } from './DEO/deo-dashboard/deo-dashboard.component';
import { AttendanceComponent } from './DEO/attendance/attendance.component';
import { ViewReportComponent } from './admin/view-report/view-report.component';


const routes: Routes = [
  {path:'', redirectTo:'/banner', pathMatch:'full'},
  {path:'header', component:HeaderComponent},
  {path:'banner', component:BannerComponent},
  {path:'footer',component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'deo', component:DeoDashboardComponent},
  {path:'admin/admin/getConfig', component:ProjectConfigComponent},
  {path:'admin/admin/getAllocation', component:ProjectAllocationComponent},
  {path:'deo/deo/setAtt', component:AttendanceComponent},
  {path:'admin/admin/viewReport', component:ViewReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
HeaderComponent, BannerComponent, FooterComponent, LoginComponent, AdminDashboardComponent,
ProjectConfigComponent,ProjectAllocationComponent,DeoDashboardComponent,AttendanceComponent,ViewReportComponent
]
