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
  userObj:any;

  user;
  userForm=this.fb.group({
    userId:['', Validators.required],
    password:['', Validators.required],
    role:['']
  });


  ngOnInit() {  
    this.userObj=JSON.parse(sessionStorage.userObj);
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
      this.userObj=data;
      sessionStorage.setItem("userObj", JSON.stringify(this.userObj));
      
   
      //alert("welcome user");
    
      if(this.userObj.role==="Admin")
    {
      alert("welcome Admin");
     

      
      this.router.navigate(['/admin'])
      this.userForm.reset();

    }
    else if(this.userObj.role==="Data Entry Operator"){
      alert("Welcome Data Entry Operator");
     
      this.router.navigate(['/deo'])
      this.userForm.reset();
    }
    });
  }
}
