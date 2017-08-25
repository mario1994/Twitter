import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import User from '../model/user';

@Injectable()
export default class UserService {
    public user: User;
    public userAlreadyExistWarning: boolean=false;

    private http : Http;

    constructor(http:Http){
      this.http = http;}

    public addUser(firstName: string,lastName: string,userName: string,city: string,country: string,dateOfBirth : string,email: string,
    aboutMe: string, smallIMage:string,bigImage:string,password: string)
    {
        this.http.post("https://tweeter-api.herokuapp.com/signup",{ firstName: firstName, lastName: lastName,
        userName:userName,  country:country, city:city, dateOfBirth:dateOfBirth, email:email, aboutSelf:aboutMe,
        largeUserProfilePicture:bigImage, smallUserProfilePicture:smallIMage, password:password} )
        .subscribe(
            response => {console.log("Succesfully added user"),
            this.userAlreadyExistWarning=false;
            var newUser=response.json().user
            console.log(newUser)},
            error => {console.log("Error when adding user", error);
            this.userAlreadyExistWarning=true; }
        );
    }

    public sameUserName()
    {
        return this.userAlreadyExistWarning
    }
}