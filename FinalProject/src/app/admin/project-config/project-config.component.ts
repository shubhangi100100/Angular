import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { ProjectConfig } from 'src/app/ProjectConfig';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styles: []
})
export class ProjectConfigComponent implements OnInit {
  project:any;
  roles:any;
  projConfig:any;
 
  x:any;

  
  pconfig:ProjectConfig;
  _url:string;


  constructor(public fb:FormBuilder,private admin:AdminService, private http:HttpClient) { 
    this._url="http://localhost:1234/BillingManagementSystem_Middle";
  }

  configurationForm= this.fb.group({
    configId: ['',Validators.required],
    location: ['',Validators.required],
    perHourBilling:['',Validators.required],
    projectId:['',Validators.required],
    roleId:['',Validators.required]



  })
  get projectId(){
    return this.configurationForm.get('projectId');
  }
  get roleId(){
    return this.configurationForm.get('roleId');
  }
  get location(){
    return this.configurationForm.get('location');
  }
  get perHourBilling(){
    return this.configurationForm.get('perHourBilling');
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

this.admin.getProjectConfig().subscribe(data=>{this.projConfig=data; console.log(this.projConfig)},
error=>{
  console.log('error occurred', error);

});
  }




saveConfig(){
  console.log(this.configurationForm.value);

  this.pconfig=this.configurationForm.value;

this.configurationForm.reset();
console.log("this is "  + this.pconfig.projectId);

this.http.post(this._url+'/saveConfig',this.pconfig)

  .subscribe(data => {

    this.x=data;

    console.log(this.x)

    this.admin.getProjectConfig()

    .subscribe(data => {this.projConfig=data;console.log(this.projConfig)

  },

      error => {

        console.log('It seems this project is already configured',error); 

      }

      );

  },

    error => {

      console.log('Error ocurred 101',error); 

    }

    );


}
}