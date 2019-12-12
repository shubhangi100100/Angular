import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  Employee: any;

  constructor(public fb:FormBuilder,private admin:AdminService) { }
  allocationForm = new FormGroup({
    projectId: new FormControl(this.project,Validators.required),
    roleId: new FormControl(this.roles,Validators.required),
    location: new FormControl('',Validators.required),
    employeeId: new FormControl(this.employees,Validators.required)

  });
  get projectId(){
    return this.allocationForm.get('projectId');
  }
  get roleId(){
    return this.allocationForm.get('roleId');
  }
  get location(){
    return this.allocationForm.get('location');
  }
  get employeeId(){
    return this.allocationForm.get('employeeId');
  }

  


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
  saveAllocate(){

    console.log(this.allocationForm.value.projectId,this.allocationForm.value.roleId,this.allocationForm.value.employeeId,this.allocationForm.value.location);

    //this.allocationForm.reset();

    this.admin.saveAllocation(this.allocationForm.value.projectId,this.allocationForm.value.roleId,this.allocationForm.value.employeeId,this.allocationForm.value.location).subscribe(
        
      data=>{

        console.log(data);
        if(data===true){
          alert("Allocation Done..");
        }
        else {
          alert("Project hasnt been configured yet")
        }
        this.allocationForm.reset();
      },
        

    error=>{

  

      alert("Some error occurred");
  });

  }

}

