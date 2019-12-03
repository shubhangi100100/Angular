import { Component, PLATFORM_ID } from '@angular/core';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  isValid=true;
  projectsList=[
    {
    'projectId':'101',
    'projectName':'MRD'
  },
  {
  'projectId':'102',
  'projectName':'axis'
}
];



  changeVal(inp:any){
    this.isValid=inp;
}

  addRow(pId:any,pName:any){
    let project={
      'projectId':pId,
      'projectName':pName
    };
    this.projectsList.push(project);

  }

  removeRow(pId:any){
    for(let i=0;i<this.projectsList.length; i++){
    if(this.projectsList[i].projectId==pId)
    {
      this.projectsList.splice(i,1);
    }
  }
}
}
