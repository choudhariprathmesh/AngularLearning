import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/Utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  firstName;
  lastName;
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res => {
      console.log('comp4', res);
      this.userName = res;
    });
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
