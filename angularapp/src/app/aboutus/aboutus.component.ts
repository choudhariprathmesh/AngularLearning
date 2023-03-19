import { Component, OnInit } from '@angular/core';
import { WikipediaApiService } from '../services/wikipedia.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  results: any[];
  constructor(private wikipediaApi: WikipediaApiService) { }

  ngOnInit() {
  }
  search(searchTerm: string) {
    this.wikipediaApi.search(searchTerm).subscribe(response => {
      this.results = response.query.search;
    });
  }
}
