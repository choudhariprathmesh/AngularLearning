import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userpostdetails',
  templateUrl: './userpostdetails.component.html',
  styleUrls: ['./userpostdetails.component.css']
})
export class UserpostdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private userService: UserService,private router: Router) { }
  userPost;
  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.userService.getPostById(id).subscribe( res => {
      console.log('get user by ID', res);
      this.userPost=res;
    })
  }
  goBackToParent() {
    this.router.navigate(['/user']);
  }
} 
 