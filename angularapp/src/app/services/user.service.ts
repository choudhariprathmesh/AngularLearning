import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getPost(): Observable<any> {
    return this.http.get<User>(this.url);
    }
    getPostById(id: number) {
     return this.http.get(this.url+ '/'+ id);
    }
}
  