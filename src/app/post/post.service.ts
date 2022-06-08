import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post } from '../models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[];
  getPosts(userId: any) : Observable<Post[]> {
    if (userId) {
      let newPath = this.path + "posts?userId=" + userId
      return this.http.get<Post[]>(newPath);
    } else {
      return this.http.get<Post[]>(this.path + "posts");
    }

  }
}
