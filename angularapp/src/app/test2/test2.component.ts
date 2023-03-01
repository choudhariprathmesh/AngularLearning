import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() child: string;
  
  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>();
  count: number = 0;
  firstName: string = 'Rocky';
  lastName: string = 'Bhai'
  username: string;
  constructor() { }

  ngOnInit() {
    console.log(this.child);

  }

  onButtonClick() {
    let counts = this.count += 1;
    console.log(counts);

  }
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  submit() {
    // Do something with the username here
    console.log('All Data Submited');
  }
  submit1() {
    // Do something with the username here
    console.log('All Data Will Be Cleared');

    this.username = '';
  }
  sendToParent() {
    this.fromChild.emit(this.lastName)
  }
}




