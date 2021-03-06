import { Injectable } from '@angular/core';
import { Project } from './Project';
import { HttpClient } from '@angular/common/http';
import { Roles } from './Role';
import { ProjectConfig } from './ProjectConfig';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  _url:string;
 
  constructor(private http:HttpClient) { 
    this._url="http://localhost:1234/BillingManagementSystem_Middle";
  }
  getAllProjects()
  {
    console.log(this._url);
    return this.http.get<Project[]>(this._url + '/getProjects');
  }

  getAllRoles()
  {
    console.log(this._url);
    return this.http.get<Roles[]>(this._url + '/getRoles');
  }

  getProjectConfig(){
    console.log(this._url);
    return this.http.get<ProjectConfig[]>(this._url+ '/getProjConfig');
  }
  getAllEmployees(){
    console.log(this._url);
    return this.http.get<Employee[]>(this._url+ '/getEmployees');
  }
  saveAllocation(projectId,roleId,employeeId,location){
    console.log(this._url);
    return this.http.post<any>(this._url+'/saveAllocate?projectId='+projectId+'&&roleId='+roleId+'&&employeeId='+employeeId+'&&location='+location, 
    {responseType: 'text' as 'json'});

  }
  getReport(employeeId,month,year){
    console.log(this._url);
    return this.http.get<any>(this._url+'/viewReport?employeeId='+employeeId+'&&month='+month+'&&year='+year,
    {responseType: 'text' as 'json'});

  }
  
  

}
