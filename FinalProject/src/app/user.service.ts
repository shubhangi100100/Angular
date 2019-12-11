import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:1234/BillingManagementSystem_Middle/";
 

  constructor(private http:HttpClient) {

   }
   validateUser(userId:any, password:any):Observable<string>
   {
    return this.http.post<any>("http://localhost:1234/BillingManagementSystem_Middle/validateUser?userId="+userId+"&&password="+password,null,
    {responseType:'text' as 'json'});

   }
}
