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

    public changeUserData(firstName: string,lastName: string,userName: string,city: string,country: string,dateOfBirth : string,
    aboutMe: string)
    {
        if(firstName === "")
            firstName=this.user.firstName;
        if(lastName === "")
            lastName=this.user.lastName;
        if(userName === "")
            userName=this.user.userName;
        if(city === "")
            city=this.user.city;
        if(country === "")
            country=this.user.country;
        if(dateOfBirth === "")
            dateOfBirth=this.user.dataOfBirth;
        if(aboutMe === "")
            aboutMe=this.user.aboutMe
        var url:string = "http://tweeter-api.herokuapp.com/users/";
        url=url.concat(this.user.id.toString());     
        this.http.put(url,{ firstName: firstName, lastName: lastName,
        userName:userName,  country:country, city:city, dateOfBirth:dateOfBirth, aboutSelf:aboutMe
        } )
        .subscribe(
            response => {console.log("Succesfully changing user")
            this.user.firstName = response.json().firstName;
             this.user.lastName = response.json().lastName;
              this.user.userName = response.json().userName;
               this.user.city = response.json().city;
                this.user.country = response.json().country;
                 this.user.dataOfBirth = response.json().dateOfBirth;
                  this.user.aboutMe = response.json().aboutSelf;
         },
            error => {console.log("Error when change user data", error); }
        );
    }

    public sameUserName()
    {
        return this.userAlreadyExistWarning
    }
}