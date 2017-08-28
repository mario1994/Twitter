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
                    <p class="twiter_info_profil"><strong>{{numberOfTweets}}</strong></p>
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


        <div class="col-md-3 rigthButtonArea" *ngIf="!changeData">
            <button type="button" (click)="changeProfileData()" class="btn btn-primary pull-right" id="changeProfilDataButton">Edit profile</button>
        </div>
        <div class="col-md-3 rigthButtonArea" *ngIf="changeData">
            <button type="button" (click)="cancelDataChange()" class="btn btn-primary pull-right" id="changeProfilDataButton">Cancel</button>
        </div>
        </div>

     
        <div class="col-md-3">
            <div *ngIf="!changeData" class="panel panel-default text-center  profileInfo">
                <h2>{{userData.firstName}} {{userData.lastName}}</h2>
                <p>@{{userData.userName}}</p>
                <p>{{userData.aboutMe}}</p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i> {{userData.dataOfBirth}}</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> {{userData.city}},{{userData.country}}</p>
            </div>
            <div *ngIf="changeData" class="panel panel-default text-center  profileInfo">
               <input type="text" [value]="firstName" (input)="firstName=$event.target.value"  name="form-first-name" placeholder={{userData.firstName}} value={{userData.firstName}} class="form-first-name form-control profileForm" id="form-first-name">
                <input type="text" [value]="lastName" (input)="lastName=$event.target.value"  name="form-last-name" placeholder={{userData.lastName}}  value={{userData.lastName}} class="form-last-name form-control profileForm" id="form-last-name">
                <input type="text" [value]="userName" (input)="userName=$event.target.value"  name="form-user-name" placeholder={{userData.userName}} value={{userData.userName}} class="form-user-name form-control profileForm" id="form-user-name">
                <input type="text" [value]="city" (input)="city=$event.target.value"  name="form-city" placeholder={{userData.city}} value={{userData.city}} class="form-city form-control profileForm" id="form-city profileForm">
                <input type="text" [value]="country" (input)="country=$event.target.value"  name="form-country" placeholder={{userData.country}}  value={{userData.country}}  class="form-country form-control profileForm" id="form-country">
                <input class="form-control profileForm" (input)="dateOfBirth=$event.target.value" [value]="dateOfBirth"  name="form-date" type="date" placeholder={{userData.dataOfBirth}} value={{userData.dataOfBirth}} id="date-input">
                <textarea [value]="aboutMe" (input)="aboutMe=$event.target.value" name="form-about-yourself" placeholder={{userData.aboutMe}}  value={{userData.aboutMe}}  class="form-about-yourself form-control profileForm" id="form-about-yourself"></textarea>
                <button type="button" (click)="saveProfileData()" class="btn btn-primary pull-centar" id="changeProfilDataButton">Save profile data</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="row TweetContainer"  *ngFor="let tweet of tweetData">
      <div class="col-md-1 LeftSide">
         <div class="row leftPictures">
            <img src="{{tweet.smallAuthorImage}}" class="img-thumbnail profileSmall" >
         </div>
      </div>
      <div class="col-md-11 rightSide">
         <div class="row">
            <div class="panel panel-default text-left rSide">
               <div class="panel-heading" id="panel-heading-tweet">
                  <a class="authorTweet"><strong>{{tweet.tweetAuthor}}</strong> <label class="timeTweet">@{{tweet.tweetAuthorTag}} - {{tweet.tweetTime}}min</label></a>
                  <p class="textOfTweet">{{tweet.tweetText}}</p>
               </div>
               <div class="panel-body panel-body-tweet" *ngIf="tweet.tweetImageURL != ''">
                  <img src={{tweet.tweetImageURL}} class="img-thumbnail tweetPicture">
               </div>
               <div class="panel-footer panel-footer-tweet">
                  <i class="fa fa-reply fa-2x tweetIcon" aria-hidden="true"></i> <label class="numberIcone">{{tweet.tweetReply}}</label>
                  <i class="fa fa-level-up fa-2x tweetIcon" aria-hidden="true"></i> <label class="numberIcone">{{tweet.tweetForward}}</label>
                  <i class="fa fa-heart fa-2x tweetIcon heart" aria-hidden="true"></i> <label class="numberIcone">{{tweet.tweetLove}}</label>
                  <i class="fa fa-ellipsis-h fa-2x tweetIcon" aria-hidden="true"></i>
               </div>
            </div>
         </div>
      </div>
   </div>
        </div>
        <!--THIS IS THE Follow Column-->
        <follow-panel>
        </follow-panel>
`})

export default class Profil{
    public user : User;
    public changeData : boolean = false;
    public firstName :string="";
    public lastName :string="";
    public userName :string="";
    public dateOfBirth :string="";
    public city :string="";
    public coutry :string="";
    public aboutMe: string ="";
    public numberOfTweets :number = 0;

    public userData:User;
    public tweetData:Tweet[]=[];
    public tweetAuthor:string = "";

    public userService:UserService;
    private tweetService: TweetService;

    constructor(userService:UserService,tweetService: TweetService){
        this.userService=userService;
        this.tweetService=tweetService;

        this.userData=this.userService.user;

        this.tweetService.filterTweet=true;
        this.tweetService.homePage=false;
        this.tweetAuthor = this.userData.firstName + " " + this.userData.lastName;
        for(let i = 0;i< this.tweetService.tweets.length;i++)
            {
                if(this.tweetService.tweets[i].tweetAuthor === this.tweetAuthor)
                this.tweetData.push(this.tweetService.tweets[i]);
                
            }
        this.numberOfTweets =  this.numberOfTweets + this.tweetData.length;
    }

    changeProfileData(){
        this.changeData=true;
    }

    cancelDataChange(){
        this.changeData=false;
    }

    saveProfileData(){
          this.userService.changeUserData(this.firstName,this.lastName,this.userName,this.city,this.coutry,this.dateOfBirth,this.aboutMe)
          this.changeData=false;
    }

    //http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg
    //http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png
};