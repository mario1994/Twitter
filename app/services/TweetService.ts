import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import Tweet from '../model/tweet';

@Injectable()
export default class TweetService {
    public tweets: Tweet[];
    private http : Http;
    public filterTweet: boolean = false;

    constructor(http:Http){
      this.http = http;
      /*var options = new RequestOptions({headers: new Headers({
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MDMzMTgxOTF9.LsiGC9dNSQ3zcTZXNLYmRGg9vcgYg6lsa_6GpjOhhxQ'
      })});*/
         this.http.get("https://tweeter-api.herokuapp.com/tweets")
                 .subscribe(
                     response => { 
                         const serverItems: Array<any> = response.json();
                         this.tweets = serverItems.map(it => new Tweet(it.tweetAuthor,it.tweetAuthorTag,it.tweetTime,it.tweetText,it.tweetImageURL,it.tweetReply,it.tweetForward,it.tweetLove));
                     },
                     error => console.log("Error when getting tweets")
                 ); 
        /*this.tweets = [ 
            new Tweet("Toni Buzov","@Tbuzov",25,"Ovo je Tweet kul super","http://www.motorward.com/wp-content/images/2016/04/Vorsteiner-BMW-M4-RACE-3.jpg",3,3,3),
            new Tweet("Mario Buzov","@Mboban",40,"Jeste spremni momci","http://cdn.finirecepti.com/wp-content/uploads/2015/10/palacinke-1.jpg",4,5,6)
            ];*/
    }

    public addTweet(tweetAuthor:string,tweetAuthorTag:string,tweetTime :number, tweetText : string, tweetImageURL : string,tweetReply : number,tweetForward : number, tweetLove : number)
    {
        this.http.post("https://tweeter-api.herokuapp.com/tweets",{ tweetAuthor: tweetAuthor, tweetAuthorTag: tweetAuthorTag,
        tweetTime:tweetTime, tweetText:tweetText, tweetImageURL:tweetImageURL, tweetReply:tweetReply, tweetForward:tweetForward, tweetLove:tweetLove} )
        .subscribe(
            response => {this.tweets.unshift(new Tweet(tweetAuthor,tweetAuthorTag,tweetTime,tweetText,tweetImageURL,tweetReply,tweetForward,tweetLove));},
            error => console.log("Error when adding tweet", error)
        );
        
    }
}