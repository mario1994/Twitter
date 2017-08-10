import { Component } from '@angular/core';
import  TweetContainer  from './tweetContainer';
@Component({
    selector: "tweet-input", 
    template: 
    `
<div class="col-md-6">
   <div class="row" id="newTweet">
      <div class="box profile-info n-border-top">
         <form>
            <textarea class="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
         </form>
         <div class="box-footer box-form">
            <button type="submit" class="btn btn-primary pull-right" id="postButton">Tweet</button>
            <p class="pull-right maxLetter">140</p>
            <ul class="nav nav-pills">
               <li><a href="#"><i class="fa fa-map-marker"></i></a></li>
               <li><a href="#"><i class="fa fa-camera"></i></a></li>
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
   
    constructor(){
    }
}