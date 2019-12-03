import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { StudentComponent } from './studentDetails/student/student.component';
import {FormsModule} from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { FilterGenderPipe } from './filter-gender.pipe';
import { PowerBoostPipe } from './power-boost.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    ReversePipe,
    FilterGenderPipe,
    PowerBoostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
