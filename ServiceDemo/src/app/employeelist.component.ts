import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {IEmployee} from './IEmployee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public empArray:IEmployee[];

  
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
   this.empService.getEmployeeDetails().subscribe(data=>this.empArray=data);
    
  }

}
