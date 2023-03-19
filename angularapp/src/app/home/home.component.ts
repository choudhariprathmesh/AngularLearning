import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { RapidapiService } from '../services/rapidapi.service';
import {filter, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rapidData: any[];
  rapidQuotes: any[];
  posts: any[];
  constructor(private rapidService: RapidapiService,private fireBase:FirebaseService) { }

  ngOnInit() {
 
  // 1 2 3 o/p 2, 3, 4
  // const obs = of(1,2,3).pipe(
  //   map(x => x + 1)
  //  ).subscribe(res => {
  //   console.log('obs of', res);
  //  })
// // emit (1,2,3,4,5)
  // const source = from([1,2,3,4,5]);

  // // filter out non-even numbers 
  
  // const example = source.pipe(filter(num => num % 2 === 0));
  // example.subscribe(res => {
  //   console.log(`Even number: ${res}`);
  // })




    this.rapidService.getFinance().subscribe((response: any) => {
      this.rapidData = response.news;
      console.log('News arr data' , response);
    });
    this.rapidService.getFinance().subscribe((response: any) => {
      this.rapidQuotes = response.quotes;
      console.log('Quotes arr data' , response);
    });

  }

  CreatePost(){
    this.fireBase.createPost().subscribe(res => {
      console.log('fireBase',res);
      
    })
  }
//   GetPost(){
//     this.fireBase.getPost().subscribe(res => {
//       console.log('fireBase get data',res);
//   })
// }
GetPost() {
  this.fireBase.getPost().subscribe(res => {
    console.log('fireBase get data',res);
    this.posts = Object.keys(res).map(key => {
      return { id: key, ...res[key] };
    });
  });
}

}
    
