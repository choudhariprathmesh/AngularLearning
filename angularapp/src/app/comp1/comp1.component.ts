// import { Component, OnInit } from '@angular/core';
// import { UtilityService } from '../services/Utility.service';

// @Component({
//   selector: 'app-comp1',
//   templateUrl: './comp1.component.html',
//   styleUrls: ['./comp1.component.css']
// })
// export class Comp1Component implements OnInit {
//   userName;
//   constructor(private _utilityService: UtilityService) {
//     this._utilityService.userName.subscribe(res => {
//       console.log('data comming from subject', res)
//       this.userName = res;
//     }, err => {
//       console.log('error occured', err);
//     })
//    }

//   ngOnInit() {
//   }
//   updateUserName(uname)
//   {
//     this.userName = uname.value;
//     console.log(uname.value);

//     this._utilityService.userName.next(uname.value);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/Utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;
  firstName;
  lastName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp2', res);
      this.userName = res;
    })
    this._utilityService.firstName.subscribe(res => {
      console.log('comp2', res);
      this.firstName = res;
    })
    this._utilityService.lastName.subscribe(res => {
      console.log('comp2', res);
      this.lastName = res;
    })
  }

  ngOnInit() {
  }

  updateName(fname, lname,uname) {
    this._utilityService.userName.next(uname);
    this._utilityService.firstName.next(fname);
    this._utilityService.lastName.next(lname);
  }
}

