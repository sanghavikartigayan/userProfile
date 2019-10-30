import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserProfile(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUserByName(username: string) {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  addUser(data: User) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  editUser(id: number, user: User) {
    return this.http.put(`${this.baseUrl}/${id}`, user).pipe(map(res => JSON.stringify(res)));
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
