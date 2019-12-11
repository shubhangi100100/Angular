import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class DeoService {
  _url:string;
  constructor(private http:HttpClient) {
    this._url="http://localhost:1234/BillingManagementSystem_Middle";
   }


   getprojectdeveloper(projectId):Observable<[Employee]>{
    console.log(this._url);
    return this.http.get<[Employee]>(this._url+'/employeeDetails?projectId='+projectId);
   }


   markAttendance(attendanceObj:any):Observable<boolean>{
     console.log(this._url);
     return this.http.post<any>(this._url+'/saveAttendance',attendanceObj,{responseType:'text' as 'json'});

  

   }

   

  
}
