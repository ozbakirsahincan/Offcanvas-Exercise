import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  path: string = "https://jsonplaceholder.typicode.com/"
  users: User[];
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.path + "users");
  }
}
