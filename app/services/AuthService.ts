import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import User from '../model/user';
import 'rxjs/add/operator/map'
import UserService from './UserService';

@Injectable()
export default class AuthService {
    private http : Http;
    public user: User;
    public invalidInput:boolean;
    public currentlyUser:any;
    public userService:UserService;

    constructor(http:Http,userService:UserService){
        this.userService=userService;
      this.http = http;}

    public logIn(email: string,password: string)
    {
        return this.http.post('https://tweeter-api.herokuapp.com/auth/login',{ email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                this.invalidInput=true;
                this.currentlyUser=user.user;
                this.setCurrentlyUser();
                console.log(user);
                if (user.user.email && user.auth_token) {
                    this.invalidInput=false;
                    localStorage.setItem('currentUser', user.user.email);
                }
            });
    }

    public logOut() {
        localStorage.removeItem('currentUser');
    }

    public setCurrentlyUser(){
        this.userService.user=new User(this.currentlyUser["id"],this.currentlyUser["firstName"],this.currentlyUser["lastName"],this.currentlyUser["userName"],
        this.currentlyUser["country"],this.currentlyUser["city"],this.currentlyUser["dateOfBirth"],this.currentlyUser["email"],
        this.currentlyUser["aboutSelf"],this.currentlyUser["smallUserProfilePicture"],this.currentlyUser["largeUserProfilePicture"],
        this.currentlyUser["password_digest"])
    }

}
