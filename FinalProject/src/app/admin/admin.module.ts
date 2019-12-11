import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { ProjectAllocationComponent } from './project-allocation/project-allocation.component';


@NgModule({
  declarations: [AdminDashboardComponent, ProjectConfigComponent, ProjectAllocationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
