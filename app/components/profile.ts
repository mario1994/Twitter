import { Component } from '@angular/core';
import TwitterNavbar from './navigationBar/twitterNavbar';
import NavbarHeader from './navigationBar/navbarHeader';
import NavbarCollapse from './navigationBar/navbarCollapse';
import ProfilePanel from './profileColumn/profilePanel';
import TweetContainer from './tweetColumn/tweetContainer';
import TweetInput from './tweetColumn/tweetInput';
import FollowPanel from './followColumn/followPanel';

import  User  from './../model/user'
import  Tweet  from './../model/tweet'

import UserService from './../services/UserService'
import TweetService from './../services/TweetService'

@Component({
    selector: "profile", 
    template: `
        <twitter-navbar>
        </twitter-navbar>
        <img src="{{userData.bigImage}}" id="headerProfileImage">

        <div class="profilHeader">
                    <div class="col-md-3">
                    <img src="{{userData.smallImage}}" id="smallProfileImage">
        </div>

            <div class="col-md-6">
                <div class="row">
                <div class="twitter_numbers_profil">
                    <strong>Tweets </strong>
                    <p class="twiter_info_profil"><strong>2</strong></p>
                </div>
                <div class="twitter_numbers_profil"> 
                    <strong>Following </strong>
                    <p class="twiter_info_profil"><strong>3</strong></p>
                </div>
                <div class="twitter_numbers_profil"> 
                    <strong>Followers </strong>
                    <p class="twiter_info_profil"><strong>34</strong></p>
                </div>     
                <div class="twitter_numbers_profil"> 
                    <strong>Likes </strong>
                    <p class="twiter_info_profil"><strong>4</strong></p>
                </div>     
                <div class="twitter_numbers_profil"> 
                    <strong>Moments </strong>
                    <p class="twiter_info_profil"><strong>457</strong></p>
                </div>      
            </div>

        </div>


        <div class="col-md-3 rigthButtonArea">
            <button type="submit" class="btn btn-primary pull-right" id="changeProfilDataButton">Edit Profile</button>
        </div>
        </div>

     
        <div class="col-md-3">
            <div class="panel panel-default text-center  profileInfo">
                <h2>{{userData.firstName}} {{userData.lastName}}</h2>
                <p>@{{userData.userName}}</p>
                <p>{{userData.aboutMe}}</p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i> {{userData.dataOfBirth}}</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> {{userData.city}},{{userData.country}}</p>
            </div>
        </div>

        <div class="col-md-6">
            <tweet-container>
            </tweet-container>
        </div>
        <!--THIS IS THE Follow Column-->
        <follow-panel>
        </follow-panel>
`})

export default class Profil{
    public user : User;

    public userData:User;
    public tweetData:Tweet[]=[];

    public userService:UserService;
    private tweetService: TweetService;

    constructor(userService:UserService,tweetService: TweetService){
        this.userService=userService;
        this.tweetService=tweetService;

        this.userData=userService.user;
        for(let i = 0;i< this.tweetService.tweets.length;i++)
        {
            if(this.tweetService.tweets[i].tweetAuthor === "Toni Buzov")
            this.tweetData.push(this.tweetService.tweets[i]);
            
        } 
        console.log(this.tweetData);
    }

    //http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg
    //http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png
};