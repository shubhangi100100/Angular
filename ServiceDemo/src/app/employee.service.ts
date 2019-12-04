import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string="http://localhost:1235/PersonsMiddleware/getAllPersons";

  constructor(private http:HttpClient) { }

  getEmployeeDetails():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);

  }
}
