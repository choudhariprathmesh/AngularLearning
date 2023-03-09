// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilityService {

//   //userName = new Subject<any>(); // observable

//   userName = new BehaviorSubject<any>('Codemind1122');
//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userName = new BehaviorSubject<any>('Abc');
  firstName = new BehaviorSubject<string>('pqrs');
  lastName = new BehaviorSubject<string>('xyz@gmail.com');

  constructor() { }
}
