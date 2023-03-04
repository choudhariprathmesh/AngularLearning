import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-api-search-assignment',
  templateUrl: './api-search-assignment.component.html',
  styleUrls: ['./api-search-assignment.component.css']
})
export class ApiSearchAssignmentComponent implements OnInit {
  namesearch: string = '';
  Users:any;
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoService.Users().subscribe((data)=>{
      console.log('data',data);
      this.Users=data;      
    })
  }

}
