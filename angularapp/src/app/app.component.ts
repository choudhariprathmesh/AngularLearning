import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  products={};
  Users:any;
  constructor(private myservice: MyserviceService,private demoService: DemoService ){
    // demoService.Users().subscribe((data)=>{
    //   console.log('data',data);
    //   this.Users=data;      
    // })

  }
  ngOnInit(): void {
    this.products = this.myservice.products;
    // this.demoService.Users().subscribe(res => {
    //   console.log('user api results', res);
    // }, err => {
    //   console.log(err);
    // })
    this.demoService.Users().subscribe((data)=>{
      console.log('data',data);
      this.Users=data;      
    })
  }
  
  array=["akash","suhas","ashitosh","prathmesh"];

  parentToChild: string = "I am From Parent";
 

  posts = [
    {
      title: 'pam tree',
      content: 'i love pam tree'
    },
    {
      title: 'mango tree',
      content: 'i love mango tree'
    }

  ]


  title = 'Angular Assignment';
  name = 'Prathmesh';
  data = {
    name: 'prathmesh',
    dept: 'IT'
  }
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  now = new Date();

  onParent(val) {
    console.log('from Parent', val);

  }
  name1='';
  name2='';
  name3='';
  name4='';
  fromParent(val1){
    
  console.log('from the child to parent',val1);
    this.name1=val1.name;
    this.name2=val1.last;
    this.name4=val1.age;
    this.name3=val1.dept;
  }

}



