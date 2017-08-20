import { Injectable } from '@angular/core';

import User from '../model/user';

@Injectable()
export default class UserService {
    public users: User[];

    constructor(){
        this.users = [ 
            new User("Mario","Boban","mBoban","Croatia","Split","16.08.1994.","mboban@gmail.com","Jako sam cool!!!","andrija"),
            new User("Toni","Buzov","tBuzov","Croatia","Kaštela","28.06.1994.","tonibuzov@gmail.com","Prejak sam !!!","fesb")
            ];
    }

    public addUser(firstName: string,lastName: string,twitterTag: string,country: string,city: string,dataOfBirth : string,email: string,
    aboutMe: string, password: string)
    {
        this.users.push(new User(firstName,lastName,twitterTag,country,city,dataOfBirth,email,aboutMe,password));
    }
}