import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerBoost'
})
export class PowerBoostPipe implements PipeTransform {

  transform(value:any,param:any): any {
      let a=1;
        for(var i=0;i<param;i++)
    a=a*value;

    return a;
  }

}
