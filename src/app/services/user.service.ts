import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Constant } from '../utilities/Constant';
import { User } from '../utilities/User';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  registration(user: User): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.post<any>(`${Constant.signupEndPoint}`, user, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }
  handleError(err: any) {
    return throwError(() => {
      console.log(err);
    });
  }

  allUsers(): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.get<any>(`${Constant.getUsersEndPoint}`, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }

  getUser(userName: String): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.get<any>(`${Constant.getUserByUserName}` + userName, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }

  deleteUser(): Observable<any> {
    return this.httpclient.delete(`${Constant.deleteUser}` + Cookie.get('userName'))
  }

  updateUser(user: User): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.put<any>(`${Constant.updateUserEndPoint}` + user.userName, user).pipe(retry(1), catchError(this.handleError));

  }
}
