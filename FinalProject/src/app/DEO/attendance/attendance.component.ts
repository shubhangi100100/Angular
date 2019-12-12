import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { DeoService } from 'src/app/deo.service';
import { Attendance } from 'src/app/Attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  project:any;  
  employee:any;
  attObj=new Attendance
  constructor(public fb:FormBuilder,private admin:AdminService,private deo:DeoService) { }

  attendanceForm= this.fb.group({
    projectId: ['', Validators.required],
    employeeId: ['',Validators.required],
    month:['',Validators.required],
    year:['',Validators.required],
    halfDay:['',Validators.required],
    fullDay:['',Validators.required]
  })

  get projectId(){
    return this.attendanceForm.get('projectId');
  }
  get employeeId(){
    return this.attendanceForm.get('employeeId');
  }
  get month(){
    return this.attendanceForm.get('month');
  }
  get year(){
    return this.attendanceForm.get('year');
  }
  get halfDay(){
    return this.attendanceForm.get('halfDay');
  }
  get fullDay(){
    return this.attendanceForm.get('fullDay');
  }

  ngOnInit() {
    this.admin.getAllProjects().subscribe(data=>{this.project=data; console.log(this.project)},
    error => {
     console.log('Error ocurred',error); 
     }
   );
  

  this.admin.getAllEmployees()

  .subscribe(data => {this.employee=data;console.log(this.employee)},

    error => {

      console.log('Error ocurred',error); 

    }

    );

  }
    projectselect(projectId:any){



      console.log(this.attendanceForm.value.projectId);
  
      this.deo.getprojectdeveloper(this.attendanceForm.value.projectId).subscribe(data=>this.employee=data);
  
  }

  saveAttendance(){
    console.log(this.attendanceForm.value);

  this.deo.markAttendance(this.attendanceForm.value).subscribe(

    data=>{

      alert("attendance marked successfully");

     // this.attendanceForm.reset(); 
    },

    error=>{

    

        alert("Attendance already marked ");

    

      });

}



  }
  /*
  saveAttendance(){
    console.log(this.attendanceForm.value);
    this.deo.markAttendance(this.attendanceForm.value.attObj,this.attendanceForm.value.employeeID,this.attendanceForm.value.projectId)
    .subscribe(data=>{
      alert("attendance marked successfully");
      this.attendanceForm.reset();},
      error=>{
        alert("attendance already marked");
      }
      )
  
  }
  */
  
  



