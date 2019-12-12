import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: []
})
export class AdminDashboardComponent implements OnInit {
  userObj;

  constructor(private location: LocationStrategy, private router:Router) {
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
    });  
    
   }

  ngOnInit() 
  { 
    if(!sessionStorage.userObj){
      
      this.router.navigate(['/login']);
  
    }
  }
 
}
