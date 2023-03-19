import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WikipediaApiService {
  apiUrl = "https://en.wikipedia.org/w/api.php";

  constructor(private http: HttpClient) {}

  search(searchTerm: string): Observable<any> {
    const params = {
      action: "query",
      format: "json",
      list: "search",
      utf8: "1",
      srsearch: searchTerm,
      origin: "*",
    };
    return this.http.get(this.apiUrl, { params });
  }
}
