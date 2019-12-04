import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  public employeeArray:IEmployee[];
 
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
this.empService.getEmployeeDetails().subscribe(data=>this.employeeArray=data);
  }

}
