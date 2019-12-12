import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url:string="http://localhost:1235/PersonsMiddleware/persons";
  constructor(private http:HttpClient) { }
  addPerson(personObj:any):Observable<string>{
    return this.http.post<string>(this.url,personObj,{responseType:'text' as 'json'});
  }
}
