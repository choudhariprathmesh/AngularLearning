import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url='https://angularapp-14a37-default-rtdb.firebaseio.com/';

  constructor(private httpClient:HttpClient) { }
  createPost(){
    let postData ={
      title: 'This Title Is From FireBase...',
      content: 'We Are Calling From AngularApp...'
    }
    return this.httpClient.post(this.url + 'post.json', postData);
  }
  getPost(){
    return this.httpClient.get(this.url + 'post.json');
  }
}
