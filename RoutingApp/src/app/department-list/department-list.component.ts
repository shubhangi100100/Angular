import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
   
  
  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Java"},
    {"id":3, "name":"Bootstrap"},
    {"id":4, "name":"Node"},
    {"id":5, "name":"C"},     
   ];
   constructor(private route:Router) { }
  ngOnInit() {
    
  }

  onSelect(dept:any){
    console.log("i m clicked");
    this.route.navigate(['/department', dept.id,dept.name]);

  }
}
