// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {

    return value.filter(function(searchh) {

      return searchh.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > - 1
    });
  }

}