// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WikipediaService {

//   constructor() { }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class WikipediaService {
//   apiUrl = 'https://en.wikipedia.org/w/api.php';

//   constructor(private http: HttpClient) { }

//   search(query: string) {
//     const params = {
//       action: 'query',
//       format: 'json',
//       list: 'search',
//       utf8: '1',
//       srsearch: query,
//       origin: '*'
//     };
//     return this.http.get(this.apiUrl, { params });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaApiService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: searchTerm,
      origin: '*'
    };
    return this.http.get(this.apiUrl, { params });
  }
}




