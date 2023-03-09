import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

  arrPost: User[] = [] ;
  // DI pots service

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPost().subscribe(res => {
      this.arrPost = res;
      console.log('user arr data' , res);
    })
  }

}
  