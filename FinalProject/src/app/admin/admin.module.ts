import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { ProjectAllocationComponent } from './project-allocation/project-allocation.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { ShowReportComponent } from './show-report/show-report.component';


@NgModule({
  declarations: [AdminDashboardComponent, ProjectConfigComponent, ProjectAllocationComponent, ViewReportComponent, ShowReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
