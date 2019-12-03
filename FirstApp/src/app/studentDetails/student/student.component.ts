import { Component, OnInit, Pipe } from '@angular/core';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  number:any="";
  power:any="";


}

  /** 
 Gender:any="";

    Name:"";
  

    studentDetails:any=[
   {    
     'name':'shubhangi',
     'gender':'female'
    },
    {
      'name':'uroosa',
      'gender':'female'
    },
    {
      'name':'anuj',
      'gender':'male'
    },
    {
      'name':'rohan',
      'gender':'male'
    },
    {
      'name':'prateek',
      'gender':'male'
    }
    ]
  }

  
   userName:"";  
  
  show=false;

  
  remove(){
    this.userName="";

  }

  toggle(){
    this.show=!this.show;

  }
  msg:any[]=[];
  Cnt: number = 0;
  count() {
      this.Cnt = this.Cnt + 1;
      this.msg.push(this.Cnt);


  }



  cityList:any=[
      {
        "city":"Delhi",
        "student":[
          {
            "studentId":"101",
            "studentName":"Aakriti",
          },
          {
            "studentId":"102",
            "studentName":"Yash",
          },
          {
            "studentId":"103",
            "studentName":"Himanshu",
          },
          {
            "studentId":"104",
            "studentName":"Gourav",
          }
]

      },
      {
        "city":"Lucknow",
        "student": [
          {
            "studentId":"105",
            "studentName":"Shubhangi",
          },

          {
            "studentId":"106",
            "studentName":"Ayush",
          },
          {
            "studentId":"107",
            "studentName":"Rohan",
          }


        ]
      },
      {
        "city":"Banglore",
      "student":[
        {
          "studentId":"108",
            "studentName":"Shubham",
        },
        {
          "studentId":"108",
            "studentName":"Anu",
        }
        
      ]



      },
      {
        "city":"Mumbai",
      "student":[
        {
          "studentId":"109",
            "studentName":"Aditya",
        },
        {
          "studentId":"110",
            "studentName":"Anuj",
        }
        
      ]
 },
       


  ]; 
  */

  


