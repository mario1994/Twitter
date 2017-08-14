import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';

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

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot(),
   RouterModule.forRoot([
      { path: 'login', component: LoginWindow }, 
      { path: 'home', component: Home },
      { path: 'profile', component: Profil },
      { path: 'registration', component: RegistrationWindow },
      { path: '**', component: LoginWindow }
    ])
  ],
  declarations: [ AppComponent,TwitterNavbar,NavbarHeader,NavbarCollapse,ProfilePanel,TweetContainer,TweetInput,FollowPanel,LoginWindow,Home,RegistrationWindow,Profil],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
