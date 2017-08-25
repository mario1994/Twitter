import { Component } from '@angular/core';

import  User  from './../../model/user'
import UserService from './../../services/UserService'

@Component({
    selector: "profile-column", 
    template: 
    `
      <div class="col-md-3">
   <div class="panel panel-default text-center">
      <div class="panel-heading">
         <h1 id="profileHome">Profile</h1>
         <div class="row">
            <div class="col-xs-6">
               <div class="big-box">
                  <img src="{{userData.smallImage}}" class="img-thumbnail" id="imageProfileHome" > 
               </div>
            </div>
            <div class="col-xs-6">
               <div class="row">
                  <div class="profile-text"> Name:{{userData.firstName}} {{userData.lastName}}</div>
                  <div class="profile-text"> @{{userData.userName}}</div>
                  <div class="profile-text"> Country:{{userData.country}}</div>
                  <div class="profile-text"> City:{{userData.city}}</div>
               </div>
            </div>
         </div>
      </div>
      <div class="panel-body">
         <div class="row">
            <div class="col-xs-6 col-sm-4">
               Tweetovi:
               <div class="twitter_numbers"> 4 </div>
            </div>
            <div class="col-xs-6 col-sm-4">
               Slijedim:
               <div class="twitter_numbers"> 22 </div>
            </div>
            <div class="clearfix visible-xs-block"></div>
            <div class="col-xs-6 col-sm-4">
               Pratitelji:
               <div class="twitter_numbers"> 36 </div>
            </div>
         </div>
      </div>
   </div>
   <div class="panel panel-default text-center">
      <div class="panel-body">
         <div class=""><strong>Trendovi</strong></div>
         <div class="hashtag_link">
            <strong>#TravelTuesday</strong>
            <div class="tweet_info"> 
               @Croatia_hr šalje tweetove o toj temi 
            </div>
         </div>
         <div class="hashtag_link">
            <strong>#Hajduk1950</strong>
            <div class="tweet_info"> 
               @Hajduk_Split šalje tweetove o toj temi 
            </div>
         </div>
         <div class="hashtag_link">
            <strong>#StrongLife</strong>
            <div class="tweet_info"> 
               @BodyBuilding šalje tweetove o toj temi 
            </div>
         </div>
         <div class="hashtag_link">
            <strong>#CSGO Major</strong>
            <div class="tweet_info"> 
               @CSGO_LIFE šalje tweetove o toj temi 
            </div>
         </div>
         <div class="hashtag_link">
            <strong>#Esport_Life</strong>
            <div class="tweet_info"> 
               @Esport_eu šalje tweetove o toj temi 
            </div>
         </div>
      </div>
   </div>
</div>
    `
})
export default class NavbarCollapse {
    public user : User;
    public userData:User;
    public userService:UserService;

    constructor(userService:UserService){
        this.userService=userService;
        this.userData=userService.user;        
    }
    //https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg
}