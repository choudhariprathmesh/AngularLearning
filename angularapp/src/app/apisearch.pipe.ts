import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apisearch'
})
export class ApisearchPipe implements PipeTransform {

  transform(value: any,searchterm:any): any {
    return value.filter(function(searc){
      return searc.name.toLowerCase().indexOf(searchterm.toLowerCase() > -1)
    });
  }

}
 