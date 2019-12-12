import { Component } from '@angular/core';
import { persons } from './person';
import { PersonService } from './person.service';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDemo';
  personObj=new persons();
  addPerson:any;

  //constructor(private pSer:PersonService){
 constructor(private fb:FormBuilder){

 }
 personForm=this.fb.group({
  personName:['',Validators.required,Validators.minLength(2)],
  age:['',Validators.required],
  password:[''],
  gender:['']

});
}
  

  /* onSubmit(){
    console.log(this.personObj);
    this.pSer.addPerson(this.personObj).subscribe(data=>this.addPerson=data);
  }
}
*/