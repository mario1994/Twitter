import { Component, AfterContentChecked } from '@angular/core';

import UserService from '../../services/UserService';

@Component({
    selector: "registration-window", 
    template: 
    `
    <div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="text-center" id="loginInHeader">Twitter Registration <i class="fa fa-twitter" aria-hidden="true"></i></h1>
            </div>
            <div class="modal-body">
                <form class="form col-md-12 center-block">
                   <div class="form-box">
                        	<div class="form-top">
	                        		<div class="form-top-left">
	                        			<h3>Sign up now</h3>
	                            		<p>Fill in the form below to get account on Twitter:</p>
	                        		</div>
	                            </div>
	                            <div class="form-bottom">
				                    <form role="form" action="" method="post" class="registration-form">

				                    	<div [ngClass]="{'form-group':true,'has-error has-feedback': firstNameWarning}">
				                    		<label class="sr-only" for="form-first-name">First name</label>
				                        	<input type="text" #firstName name="form-first-name" placeholder="First name..." class="form-first-name form-control" id="form-first-name">
                                            <span *ngIf="firstNameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="firstNameWarning">
                                              You need to fill up this form
                                            </span>
				                        </div>

				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': lastNameWarning}">
				                        	<label class="sr-only" for="form-last-name">Last name</label>
				                        	<input type="text" #lastName name="form-last-name" placeholder="Last name..." class="form-last-name form-control" id="form-last-name">
                                            <span *ngIf="lastNameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="lastNameWarning">
                                              You need to fill up this form
                                            </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': usernameWarning || userAlreadyExistWarning}">
				                    		<label class="sr-only" for="form-username">Username</label>
				                        	<input type="text" #username name="form-user-name" placeholder="User name..." class="form-user-name form-control" id="form-user-name">
                                            <span *ngIf="usernameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="usernameWarning">
                                              You need to fill up this form
                                            </span>
                                            <span class="control-label" *ngIf="userAlreadyExistWarning">
                                             User already exist, please change user name
                                            </span>
				                        </div>


                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': cityWarning}">
				                    		<label class="sr-only" for="form-city">City</label>
				                        	<input type="text" #city name="form-city" placeholder="Your city..." class="form-city form-control" id="form-city">
                                            <span *ngIf="cityWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                            <span class="control-label" *ngIf="cityWarning">
                                              You need to fill up this form

                                            </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': countryWarning}">
				                    		<label class="sr-only" for="form-country">Country</label>
				                        	<input type="text" #country name="form-country" placeholder="Your country..." class="form-country form-control" id="form-country">
                                            <span *ngIf="countryWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                               <span class="control-label" *ngIf="countryWarning">
                                              You need to fill up this form

                                            </span>      
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': dateWarning}">
                                            <label class="sr-only" for="form-data">DATE</label>
                                            <input class="form-control" #date name="form-date" type="date" placeholder="Date..." id="date-input">
                                            <span *ngIf="dateWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="dateWarning">
                                             You need to fill up this form

                                            </span>
                                        </div>
				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': emailWarning}">
				                        	<label class="sr-only" for="form-email">Email</label>
				                        	<input type="email" #email name="form-email" placeholder="Email..." class="form-email form-control" id="form-email">
                                            <span *ngIf="emailWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="emailWarning">
                                            You need to fill up this form
                                            </span>
				                        </div>

				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': abutMeWarning}">
				                        	<label class="sr-only" for="form-about-yourself">About yourself</label>
				                        	<textarea #aboutMe name="form-about-yourself" placeholder="About yourself..." 
				                        	class="form-about-yourself form-control" id="form-about-yourself"></textarea>
                                            <span *ngIf="abutMeWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="abutMeWarning">
                                            You need to fill up this form
                                           </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': passwordWarning}">
                                            <label for="password-input" class="form-label" id="label-password">Password:</label>
                                                <input #password class="form-control" type="password" placeholder="Password..."  id="password-input">
                                                <span *ngIf="passwordWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="passwordWarning">
                                              You need to fill up this form
                                                </span>
                                        </div>
                                       
                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': passwordConfirmWarning || passwordValidation}">
                                            <label for="passwordConfirm-input" class="sr-only">Password</label>
                                                <input #passwordConfirm class="form-control" type="password" placeholder="Confirm Password..."  id="passwordConfirm-input">
                                                <span *ngIf="passwordConfirmWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="passwordConfirmWarning">
                                            You need to fill up this form
                                            </span>
                                            <span class="control-label" *ngIf="passwordValidation">
                                            You confirm password doesnt match with password, please repeat input !!! 
                                            </span>
                                        </div>
				                        <button class="btn btn-primary btn-lg btn-block router-link" routerLink="/registration" routerLinkActive="active"
                                         (click)="addUser(firstName,lastName,username,city,country,date,email,aboutMe,password,passwordConfirm)">Sign up</button>
				                    </form>
			                    </div>
                        	</div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="col-md-12">
                <button class="btn router-link" data-dismiss="modal" routerLink="/login" routerLinkActive="active" aria-hidden="true">Cancel</button>
                </div>	
            </div>
        </div>
        </div>
    </div>
    `
})



export default class RegistrationWindow implements AfterContentChecked
{
    public firstNameWarning:boolean=false;
    public lastNameWarning:boolean=false;
    public usernameWarning:boolean=false;
    public cityWarning:boolean=false;
    public countryWarning:boolean=false;
    public dateWarning:boolean=false;
    public emailWarning:boolean=false;
    public abutMeWarning:boolean=false;
    public passwordWarning:boolean=false;
    public passwordConfirmWarning:boolean=false;
    public passwordValidation=false;

    private userService: UserService;
    private userAlreadyExistWarning:boolean;
    
    ngAfterContentChecked():void{this.userAlreadyExistWarning=this.userService.sameUserName();}
    
    constructor(userService: UserService){
        this.userService = userService;
    }

    addUser(firstName:HTMLInputElement,lastName:HTMLInputElement,username:HTMLInputElement,
    city:HTMLInputElement,country:HTMLInputElement,date:HTMLInputElement,email:HTMLInputElement,
    aboutMe:HTMLInputElement,password:HTMLInputElement,passwordConfirm:HTMLInputElement)
    {
        if(firstName.value === "")
            this.firstNameWarning=true;
        else 
            this.firstNameWarning=false;
        if(lastName.value === "")
            this.lastNameWarning=true;
        else 
            this.lastNameWarning=false;
        if(username.value === "")
        {
            this.usernameWarning=true;
            this.userAlreadyExistWarning=false;
        }
        else 
            this.usernameWarning=false;
        if(city.value === "")
            this.cityWarning=true;
        else 
            this.cityWarning=false;
        if(country.value === "")
            this.countryWarning=true;
        else 
            this.countryWarning=false;
        if(date.value === "")
            this.dateWarning=true;
        else 
            this.dateWarning=false;
        if(email.value === "")
            this.emailWarning=true;
        else 
            this.emailWarning=false;
        if(aboutMe.value === "")
            this.abutMeWarning=true;
        else 
            this.abutMeWarning=false;
        if(password.value === "")
            this.passwordWarning=true;
        else 
            this.passwordWarning=false;
        if(passwordConfirm.value === "")
            this.passwordConfirmWarning=true;
        else
        { 
            this.passwordConfirmWarning=false;
            if(password.value === passwordConfirm.value)
                this.passwordValidation=false
            else    
                this.passwordValidation=true
        }

        if(!this.firstNameWarning && !this.lastNameWarning && !this.usernameWarning && !this.cityWarning && !this.countryWarning&& !this.dateWarning && !this.emailWarning && !this.passwordWarning &&!this.passwordConfirmWarning && !this.passwordValidation)
        {
             this.userService.addUser(firstName.value,lastName.value,username.value,city.value,country.value,date.value,email.value,aboutMe.value,password.value)
        }
        else
        {}

        
      

       
    }



}