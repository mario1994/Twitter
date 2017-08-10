import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import TwitterNavbar from './components/navigationBar/twitterNavbar';
import NavbarHeader from './components/navigationBar/navbarHeader';
import NavbarCollapse from './components/navigationBar/navbarCollapse';
import ProfilePanel from './components/profileColumn/profilePanel';
import TweetContainer from './components/tweetColumn/tweetContainer';
import TweetInput from './components/tweetColumn/tweetInput';
import FollowPanel from './components/followColumn/followPanel';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot()],
  declarations: [ AppComponent,TwitterNavbar,NavbarHeader,NavbarCollapse,ProfilePanel,TweetContainer,TweetInput,FollowPanel],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
