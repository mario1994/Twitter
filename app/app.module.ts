import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import TwitterNavbar from './components/navigationBar/twitterNavbar';
import NavbarHeader from './components/navigationBar/navbarHeader';
import NavbarCollapse from './components/navigationBar/navbarCollapse';
import ProfilePanel from './components/profileColumn/profilePanel';
import TweetContainer from './components/tweetColumn/tweetContainer';
import TweetInput from './components/tweetColumn/tweetInput';
import FollowPanel from './components/followColumn/followPanel';
import Home from './components/home';
import Profil from './components/profile';
import LoginWindow from './components/loginWindow/loginWindow';
import RegistrationWindow from './components/registrationWindow/registrationWindow';

import TweetService from './services/TweetService';
import UserService from './services/UserService';
import AuthGuard from './services/AuthGuardService';
import AuthService from './services/AuthService';

import timePipe from './pipes/timePipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, NgbModule.forRoot(),
   RouterModule.forRoot([
      { path: 'login', component: LoginWindow }, 
      { path: 'home', canActivate: [AuthGuard], component: Home },
      { path: 'profile', canActivate: [AuthGuard],component: Profil },
      { path: 'registration', component: RegistrationWindow },
      { path: '**', component: LoginWindow }
    ])
  ],
  declarations: [ AppComponent,TwitterNavbar,NavbarHeader,NavbarCollapse,ProfilePanel,TweetContainer,TweetInput,FollowPanel,LoginWindow,Home,RegistrationWindow,Profil,timePipe],
  providers: [TweetService,UserService,AuthGuard,AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
