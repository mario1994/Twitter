import { Injectable } from '@angular/core';

import Tweet from '../model/tweet';

@Injectable()
export default class TweetService {
    public tweets: Tweet[];

    constructor(){
        this.tweets = [ 
            new Tweet("Toni Buzov","@Tbuzov",25,"Ovo je Tweet kul super","http://www.motorward.com/wp-content/images/2016/04/Vorsteiner-BMW-M4-RACE-3.jpg",3,3,3),
            new Tweet("Mario Buzov","@Mboban",40,"Jeste spremni momci","http://cdn.finirecepti.com/wp-content/uploads/2015/10/palacinke-1.jpg",4,5,6)
            ];
    }

    public addTweet(tweetAuthor:string,tweetAuthorTag:string,tweetTime :number, tweetText : string, tweetImageURL : string,tweetReply : number,tweetForward : number, tweetLove : number)
    {
        this.tweets.unshift(new Tweet(tweetAuthor,tweetAuthorTag,tweetTime,tweetText,tweetImageURL,tweetReply,tweetForward,tweetLove));
    }
}