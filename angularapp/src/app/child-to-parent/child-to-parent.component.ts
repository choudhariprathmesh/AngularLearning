import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
  @Output() fromTheChild: EventEmitter<any> = new EventEmitter<any>();
  emp ={
      name: 'Prathmesh',
      last: 'Choudhari',
      age: 22,
      dept: 'IT'
    }
   
  constructor() { }

  ngOnInit() {
  }
  
  sendParent(){
    this.fromTheChild.emit(this.emp)
  }
}


