import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
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



