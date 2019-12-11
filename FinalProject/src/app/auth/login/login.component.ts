import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
 

  constructor(private router: Router,private fb:FormBuilder, private userService:UserService) { }
  role:string;
  userForm=this.fb.group({
    userId:['', Validators.required],
    password:['', Validators.required],
    role:['']
  });


  ngOnInit() {  
  }
  get userId(){
    return this.userForm.get('userId');

  }
  get password(){
    return this.userForm.get('password');

  }
  loginSubmit(){
    console.log(this.userForm.value);
    this.userService.validateUser(this.userForm.value.userId,this.userForm.value.password).subscribe
    (data=>{
      //alert("welcome user");
    
      if(data==="Admin")
    {
      alert("welcome Admin");
     

      this.router.navigate(['/admin'])

    }
    else if(data==="Data Entry Operator"){
      alert("Welcome Data Entry Operator");
      this.router.navigate(['/deo'])
    }
    });
  }
}
