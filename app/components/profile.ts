import { Component } from '@angular/core';
import TwitterNavbar from './navigationBar/twitterNavbar';
import NavbarHeader from './navigationBar/navbarHeader';
import NavbarCollapse from './navigationBar/navbarCollapse';
import ProfilePanel from './profileColumn/profilePanel';
import TweetContainer from './tweetColumn/tweetContainer';
import TweetInput from './tweetColumn/tweetInput';
import FollowPanel from './followColumn/followPanel';

@Component({
    selector: "profile", 
    template: `
        <twitter-navbar>
        </twitter-navbar>
        <img src="http://hdimages.org/wp-content/uploads/2017/03/placeholder-image4.jpg" id="headerProfileImage">

        <div class="profilHeader">
                    <div class="col-md-3">
                    <img src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png" id="smallProfileImage">
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
                <h2>Mario Boban</h2>
                <p>@mBoban</p>
                <p>Jako kršan momak, stijena od čovjeka</p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i> 16.08.1994</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Split</p>
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

export default class Profil{};