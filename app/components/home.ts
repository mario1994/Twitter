import { Component } from '@angular/core';
import TwitterNavbar from './navigationBar/twitterNavbar';
import NavbarHeader from './navigationBar/navbarHeader';
import NavbarCollapse from './navigationBar/navbarCollapse';
import ProfilePanel from './profileColumn/profilePanel';
import TweetContainer from './tweetColumn/tweetContainer';
import TweetInput from './tweetColumn/tweetInput';
import FollowPanel from './followColumn/followPanel';

@Component({
    selector: "home", 
    template: `
        <twitter-navbar>
        </twitter-navbar>

        <!--THIS IS THE Profile Column-->
        <profile-column>
        </profile-column>

        <!--THIS IS THE Tweet Column-->
        <tweet-input>
        </tweet-input>

        <!--THIS IS THE Follow Column-->
        <follow-panel>
        </follow-panel>

`})

export default class Home{};