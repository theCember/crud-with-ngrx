import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly DATABASE_URL = 'http://localhost:3000/';
  readonly ALL_USERS_URL = 'users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>(this.DATABASE_URL + this.ALL_USERS_URL);
  }
}
