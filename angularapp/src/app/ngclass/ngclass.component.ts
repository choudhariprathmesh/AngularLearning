import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  
  peoples: any[] = [
    {
      'name': 'Jack',
      'country': 'UK'
    },
    {
      'name': 'Sumit',
      'country': 'USA'
    },
    {
      'name': 'Anup',
      'country': 'HK'
    },
    {
      'name': 'Harmany',
      'country': 'UK'
    },
    {
      'name': 'Surya',
      'country': 'USA'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  showDetails = false;
  clicks = [];
  nextClick = 1;

  addClick() {
    this.clicks.push(this.nextClick);
    this.nextClick++;
    this.toggleDisplay();
  }

  toggleDisplay() {
    this.showDetails = !this.showDetails;
  }

}
