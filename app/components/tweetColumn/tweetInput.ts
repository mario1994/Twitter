import { Component, Input, Output, EventEmitter} from '@angular/core';
import  TweetContainer  from './tweetContainer';

import TweetService from '../../services/TweetService';

@Component({
    selector: "tweet-input", 
    template: 
    `
<div class="col-md-6">
   <div class="row" id="newTweet">
      <div class="box profile-info n-border-top">
         <form>
            <textarea class="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?" #input (keyup)="countLetter($event)"></textarea>
         </form>
         <form *ngIf="openImageForm">
            <textarea class="form-control input-lg p-text-area" rows="1" placeholder="Please enter URL of image" (keyup)="setImageUrl($event)"></textarea>
         </form>
         <div class="box-footer box-form">
            <button type="submit" class="btn btn-primary pull-right" id="postButton" (click)="addTweet(input)">Tweet</button>
            <p [ngClass]="{'pull-right maxLetter':true,'moreThan140': numberOfLetter <= 0}">{{numberOfLetter}}</p>
            <ul class="nav nav-pills">
               <li><a href="#"><i class="fa fa-map-marker"></i></a></li>
               <li class="imageButton"><a (click)="imageForm()"><i class="fa fa-camera"></i></a></li>
               <li><a href="#"><i class=" fa fa-film"></i></a></li>
               <li><a href="#"><i class="fa fa-microphone"></i></a></li>
            </ul>
         </div>
      </div>
   </div>
   <!--THIS IS THE PART WHERE WE PUT IN TWEETS-->
   <tweet-container>
   </tweet-container>

</div>
    `
})
export default class TweetInput {
    private tweetService: TweetService;
    private imageUrl: string;
    private openImageForm :boolean;
    private numberOfLetter : number;

    constructor(tweetService: TweetService){
        this.tweetService = tweetService;
        this.numberOfLetter= 140;
        this.imageUrl='';
    }

    private addTweet(input: HTMLInputElement)
    {
        const value = input.value.trim();
        if(!value) { return; }
        input.value = "";
      
        this.tweetService.addTweet("Toni Buzov","@Tbuzov",25,value.slice(0,140),this.imageUrl,0,0,0)
        this.imageUrl="";
        this.openImageForm=false;
        this.numberOfLetter= 140;
    }

    private imageForm(){
        this.openImageForm= !this.openImageForm;
        this.imageUrl="";
    }

    private setImageUrl(event:any){
        this.imageUrl=event.target.value;
    }

    private countLetter(event:any)
    {
        this.numberOfLetter=140-event.target.value.length;
    }
}