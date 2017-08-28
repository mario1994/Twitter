import { Component } from '@angular/core';

import  Tweet  from './../../model/tweet';
import TweetService from '../../services/TweetService';

import  User  from './../../model/user'
import UserService from './../../services/UserService'


@Component({
    selector: "tweet-container", 
    template: 
    `   
    <div class="row TweetContainer"  *ngFor="let tweet of tweetService.tweets">
      <div class="col-md-1 LeftSide">
         <div class="row leftPictures">
            <img src="{{tweet.smallAuthorImage}}" class="img-thumbnail profileSmall" >
         </div>
      </div>
      <div class="col-md-11 rightSide">
         <div class="row">
            <div class="panel panel-default text-left rSide">
               <div class="panel-heading" id="panel-heading-tweet">
                  <a class="authorTweet"><strong>{{tweet.tweetAuthor}}</strong> <label class="timeTweet">@{{tweet.tweetAuthorTag}} - {{tweet.tweetTime | timePipe}}</label></a>
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
    `
})
export default class TweetContainer{
    public user : User;

    public userData:User;

    public userService:UserService;
    private tweetService: TweetService;
    
    constructor(tweetService: TweetService,userService: UserService){
        this.userService=userService;
        this.tweetService=tweetService;

        this.userData=userService.user;
    } 

    //https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg           
}