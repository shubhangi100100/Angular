import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
private departmentId:number;
private departmentName:string;

  constructor(private activatedRouteObj:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.activatedRouteObj.snapshot.paramMap.get('deptid'));
    let name=this.activatedRouteObj.snapshot.paramMap.get('deptname');
    this.departmentId=id;
    console.log(name);

    this.departmentName=name;

  }

}
