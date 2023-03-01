import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title: string = 'Top 3 Movies'
  movies: Movie[] = [
    { title: '3Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2009' },
    { title: 'Tumbad', director: 'Rahil', cast: 'Rahil', releaseDate: '2020' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022' },
    { title: 'Bahubali', director: 'Prabhas', cast: 'Prabhas', releaseDate: '2016' }
  ]

  title1: string = '*ngFor Assignment'
  // countries = ['india','USA'];
  // selectedCountry = 'india';
  // states =['Maharashtra','new York']
  // // states =['Maharashtra','Goa',' Karnataka','Madhya Pradesh',' Andhra Pradesh']

  // updateStates() {
  //   this.states = this.states[this.selectedCountry];
  // }
  // favSongs = ['VedTuze','Yedlavlay','Dj WaleBabu']
  // constructor() { }

  countries: string[] = ['USA', 'UK', 'India'];
  states: { [key: string]: string[] } = {
    'USA': ['California', 'Texas', 'Florida', 'New York'],
    'UK': ['London', 'Birmingham', 'Manchester'],
    'India': ['Maharashtra', 'Tamil Nadu', 'Uttar Pradesh'],
  };
  filteredStates: string[] = [];

  updateStates(selectedCountry: string) {
    this.filteredStates = this.states[selectedCountry];
  }
  ngOnInit() {
  }

}

