import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs";
import {commonHttpHeaders} from "./commonHttpHeaders";
import {UserData} from "../../../shared/to/user-data";

@Injectable()
export class AuthenticationService {
  private loggedIn: boolean;
  private item = {
    firstName: 'Senaka',
    lastName: 'Perera'
  }

  constructor(private http: Http) {

  }

/*  login(userName: string, password: string): Observable<any> {
    console.log('Authentication Service...');

    return this.http.post(`/api/user/authentication/`,
      JSON.stringify({userName: userName, password: password}),
      commonHttpHeaders(1));

  }*/

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  setAuthStatus(status) {
    this.loggedIn = status;
  }
  isLoggedIn() {
    return this.loggedIn;
  }

}
