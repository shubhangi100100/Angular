import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Roles } from 'src/app/Role';
import { Project } from 'src/app/Project';
import { ProjectConfig } from 'src/app/ProjectConfig';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-project-allocation',
  templateUrl: './project-allocation.component.html',
  styleUrls: ['./project-allocation.component.css']
})
export class ProjectAllocationComponent implements OnInit {
  project:any;
  roles:any;
  employees:any;

  constructor(public fb:FormBuilder,private admin:AdminService) { }
  allocationForm = new FormGroup({
    allocationId: new FormControl(''),
    pcObj: new FormControl(ProjectConfig),

    eObj: new FormControl(Employee),
    location: new FormControl('')

  });
   



  ngOnInit() {
    this.admin.getAllProjects().subscribe(data=>{this.project=data; console.log(this.project)},
    error => {
     console.log('Error ocurred',error); 
     }
   );
   this.admin.getAllRoles().subscribe(data=>{this.roles=data; console.log(this.roles)},
   error=>{
     console.log('Error occurred', error);
  });
  this.admin.getAllEmployees().subscribe(data=>{this.employees=data; console.log(this.employees)},
  error=>{
    console.log('error occurred', error);
});
  }
}

