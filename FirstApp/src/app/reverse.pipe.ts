import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string, param: string): string {
    let s:string="";

    for(var i=param.length; i>=0; i--){
      s= s+param.charAt(i);

    }
    
    return s;
  }

}
