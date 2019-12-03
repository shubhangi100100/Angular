import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  


  public heroObj;

  
  heros:any=[
  {"id":1, "name":"Shaktiman"},
   {"id":2, "name":"hatim"},
    {"id":3, "name":"wolverine"},
    {"id":4, "name":"action kamen"},
    {"id":5, "name":"spiderman"},
    {"id":6, "name":"flash"},
    {"id":7, "name":"batman"},
    {"id":8, "name":"wonder woman"},
  ];
  constructor() { }

  ngOnInit() {

  }


 onSelectedHero(heroObj:any){
   console.log('I m Here' +heroObj.id+" "+heroObj.name);
   this.heroObj=heroObj;
   ;

 }
}
