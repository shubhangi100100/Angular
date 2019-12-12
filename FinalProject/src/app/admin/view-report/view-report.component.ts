import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  employee:any;

  constructor(public fb:FormBuilder,private admin:AdminService,private router:Router) { }
  viewReportForm=this.fb.group({
    employeeId:[''],
    month:[''],
    year:['']
  })
  get employeeId(){
    return this.viewReportForm.get('employeeId');
  }
  get month(){
    return this.viewReportForm.get('month');
  }
  get year(){
    return this.viewReportForm.get('year');
  }

  ngOnInit() {
    this.admin.getAllEmployees()

  .subscribe(data => {this.employee=data;console.log(this.employee)},

    error => {

      console.log('Error ocurred',error); 

    }

    );
  }

    showReport(){
      console.log(this.viewReportForm.value.employeeId,this.viewReportForm.value.month,this.viewReportForm.value.year);
      this.admin.getReport(this.viewReportForm.value.employeeId,this.viewReportForm.value.month,this.viewReportForm.value.year)
      .subscribe(
        data=>{
          alert("bill amount for the selected employee is" +data);
          this.viewReportForm.reset(); 

        },
        error=>{
          alert("some error occurred");
        }
      );

}


    }


