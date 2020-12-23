import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})




export class UserService {
  private baseUrl ='http://localhost:8080/api/user/users';
  constructor(private httpClient: HttpClient) { }

 

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  addUser(user :User): Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/auth/signup"}`, user);
  }

  getUserById(id :number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id:number , user: User) :Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,user);
  }

  deleteUserById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}


