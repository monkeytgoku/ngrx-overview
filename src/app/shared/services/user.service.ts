import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:9999/api/v1/users');
  }
}
