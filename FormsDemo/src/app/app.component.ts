import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDemo';
  personObj=new Person();
  onSubmit(){
    console.log(this.personObj);
  }

}
