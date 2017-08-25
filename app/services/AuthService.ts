import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import User from '../model/user';
import 'rxjs/add/operator/map'

@Injectable()
export default class AuthService {
    private http : Http;
    public user: User;

    constructor(http:Http){
      this.http = http;}

    public logIn(email: string,password: string)
    {
        return this.http.post('https://tweeter-api.herokuapp.com/auth/login',{ email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                console.log(user);
                if (user.user.email && user.auth_token) {
                    localStorage.setItem('currentUser', user.user.email);
                }
            });
    }

    public logOut() {
        localStorage.removeItem('currentUser');
    }

}
