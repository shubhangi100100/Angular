import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deo-dashboard',
  templateUrl: './deo-dashboard.component.html',
  styleUrls: ['./deo-dashboard.component.css']
})
export class DeoDashboardComponent implements OnInit {

  constructor(private location: LocationStrategy,private router:Router) {
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
  history.pushState(null, null, window.location.href);
});  
   }

  ngOnInit() {
    if(!sessionStorage.userObj){
      
      this.router.navigate(['/login']);
  
    }
  }

}
