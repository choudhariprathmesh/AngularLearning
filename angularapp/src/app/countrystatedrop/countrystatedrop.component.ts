import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrystatedrop',
  templateUrl: './countrystatedrop.component.html',
  styleUrls: ['./countrystatedrop.component.css']
})
export class CountrystatedropComponent implements OnInit {

  countries =[
    {id:'1',name:'india'},
    {id:'2',name:'usa'}
  ]
  arrStates: Array<any> =[
    {id:'s1', parentId:'2', name:'Baverya'},
    {id:'s2', parentId:'2', name:'Barlin'},
    {id:'s3', parentId:'1', name:'Maharashtra'},
    {id:'s4', parentId:'1', name:'goa'},
  ]
  
  states: Array<any> =[];
  constructor() { }

  ngOnInit() {
  }
  OnCountrySelect(val:any){
  this.states = this.arrStates.filter(c => c.parentId == val.target.value);
  }
}
