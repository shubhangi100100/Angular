import { Pipe, PipeTransform } from '@angular/core';
import { StudentComponent } from './studentDetails/student/student.component';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {
    

  transform(objList:any,param:any): any{
    let list=[];
if(param==''){
  return objList;

}
  else
{
  for(let obj of objList){
    if(obj.gender==param)
    list.push(obj);

  }
}
    return list;

    
    
}
}

