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
	                        		<div *ngIf="!succesfullyRegistration" class="form-top-left">
	                        			<h3>Sign up now</h3>
	                            		<p>Fill in the form below to get account on Twitter:</p>
	                        		</div>
                                    <div *ngIf="succesfullyRegistration" class="form-top-left">
	                        			<h3 class="registration">Successfully registration !!!  </h3>
	                        		</div>
	                            </div>
	                            <div class="form-bottom">
				                    <form role="form" action="" method="post" class="registration-form">

				                    	<div [ngClass]="{'form-group':true,'has-error has-feedback': firstNameWarning}">
				                    		<label class="sr-only" for="form-first-name">First name</label>
				                        	<input type="text" #firstName (focus)="onFocus(firstName)" name="form-first-name" placeholder="First name" class="form-first-name form-control" id="form-first-name">
                                            <span *ngIf="firstNameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="firstNameWarning">
                                              You need to fill up this form
                                            </span>
				                        </div>

				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': lastNameWarning}">
				                        	<label class="sr-only" for="form-last-name">Last name</label>
				                        	<input type="text" #lastName (focus)="onFocus(lastName)" name="form-last-name" placeholder="Last name" class="form-last-name form-control" id="form-last-name">
                                            <span *ngIf="lastNameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="lastNameWarning">
                                              You need to fill up this form
                                            </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': usernameWarning || userAlreadyExistWarning}">
				                    		<label class="sr-only" for="form-username">Username</label>
				                        	<input type="text" #username (focus)="onFocus(username)" name="form-user-name" placeholder="User name" class="form-user-name form-control" id="form-user-name">
                                            <span *ngIf="usernameWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="usernameWarning">
                                              You need to fill up this form
                                            </span>
				                        </div>


                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': cityWarning}">
				                    		<label class="sr-only" for="form-city">City</label>
				                        	<input type="text" #city (focus)="onFocus(city)" name="form-city" placeholder="Your city" class="form-city form-control" id="form-city">
                                            <span *ngIf="cityWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                            <span class="control-label" *ngIf="cityWarning">
                                              You need to fill up this form

                                            </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': countryWarning}">
				                    		<label class="sr-only" for="form-country">Country</label>
				                        	<input type="text" #country (focus)="onFocus(country)" name="form-country" placeholder="Your country" class="form-country form-control" id="form-country">
                                            <span *ngIf="countryWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                               <span class="control-label" *ngIf="countryWarning">
                                              You need to fill up this form

                                            </span>      
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': dateWarning}">
                                            <label class="sr-only" for="form-data">DATE</label>
                                            <input class="form-control" #date (focus)="onFocus(date)" name="form-date" type="date" placeholder="Date" id="date-input">
                                            <span *ngIf="dateWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="dateWarning">
                                             You need to fill up this form

                                            </span>
                                        </div>
				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': emailWarning}">
				                        	<label class="sr-only" for="form-email">Email</label>
				                        	<input type="email" #email (focus)="onFocus(email)" name="form-email" placeholder="Email" class="form-email form-control" id="form-email">
                                            <span *ngIf="emailWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="emailWarning">
                                            You need to fill up this form
                                            </span>
                                            <span class="control-label" *ngIf="userAlreadyExistWarning">
                                             User already exist or invalid email, please change user email !!!
                                            </span>
				                        </div>

				                        <div [ngClass]="{'form-group':true,'has-error has-feedback': abutMeWarning}">
				                        	<label class="sr-only" for="form-about-yourself">About yourself</label>
				                        	<textarea #aboutMe (focus)="onFocus(aboutMe)" name="form-about-yourself" placeholder="About yourself" 
				                        	class="form-about-yourself form-control" id="form-about-yourself"></textarea>
                                            <span *ngIf="abutMeWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                             <span class="control-label" *ngIf="abutMeWarning">
                                            You need to fill up this form
                                           </span>
				                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': smallImageWarning}">
                                            <label for="smallImage-input" class="form-label" id="label-smallImage">Images:</label>
                                                <input #smallImage (focus)="onFocus(smallImage)" class="form-control" type="text" placeholder="Profile picture"  id="smallImage-input">
                                                <span *ngIf="smallImageWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="smallImageWarning">
                                              You need to fill up this form
                                                </span>
                                        </div>
                                       
                                         <div [ngClass]="{'form-group':true,'has-error has-feedback': bigImageWarning}">
                                            <label for="bigImage-input" class="sr-only" id="label-bigImage">Images:</label>
                                                <input #bigImage (focus)="onFocus(bigImage)" class="form-control" type="text" placeholder="Time line picture" id="bigImage-input">
                                                <span *ngIf="bigImageWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="bigImageWarning">
                                              You need to fill up this form
                                                </span>
                                        </div>

                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': passwordWarning}">
                                            <label for="password-input" class="form-label" id="label-password">Password:</label>
                                                <input #password (focus)="onFocus(password)" class="form-control" type="password" placeholder="Password"  id="password-input">
                                                <span *ngIf="passwordWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="passwordWarning">
                                              You need to fill up this form
                                                </span>
                                        </div>
                                       
                                        <div [ngClass]="{'form-group':true,'has-error has-feedback': passwordConfirmWarning || passwordValidation}">
                                            <label for="passwordConfirm-input" class="sr-only">Password</label>
                                                <input #passwordConfirm (focus)="onFocus(passwordConfirm)" class="form-control" type="password" placeholder="Confirm Password"  id="passwordConfirm-input">
                                                <span *ngIf="passwordConfirmWarning" class="glyphicon glyphicon-remove form-control-feedback"></span>
                                                  <span class="control-label" *ngIf="passwordConfirmWarning">
                                            You need to fill up this form
                                            </span>
                                            <span class="control-label" *ngIf="passwordValidation">
                                            You confirm password doesnt match with password, please repeat input !!! 
                                            </span>
                                        </div>
				                        <button class="btn btn-primary btn-lg btn-block router-link" routerLink="/registration" routerLinkActive="active"
                                         (click)="addUser(firstName,lastName,username,city,country,date,email,aboutMe,smallImage,bigImage,password,passwordConfirm)">Sign up</button>
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
    public smallImageWarning:boolean=false;
    public bigImageWarning:boolean=false;
    public passwordValidation=false;

    private userService: UserService;
    private userAlreadyExistWarning:boolean;
    private succesfullyRegistration:boolean=false;

    returnUrl: string;
    
    ngAfterContentChecked():void{this.userAlreadyExistWarning=this.userService.sameUserName();}
    
    constructor(userService: UserService){
        this.userService = userService;
    }

    addUser(firstName:HTMLInputElement,lastName:HTMLInputElement,username:HTMLInputElement,
    city:HTMLInputElement,country:HTMLInputElement,date:HTMLInputElement,email:HTMLInputElement,
    aboutMe:HTMLInputElement,smallIMage:HTMLInputElement,bigImage:HTMLInputElement,password:HTMLInputElement,passwordConfirm:HTMLInputElement)
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
        if(smallIMage.value === "")
            this.smallImageWarning=true;
        else 
            this.smallImageWarning=false;
        if(bigImage.value === "")
            this.bigImageWarning=true;
        else 
            this.bigImageWarning=false;
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

        if(!this.firstNameWarning && !this.lastNameWarning && !this.usernameWarning && !this.cityWarning &&
         !this.countryWarning&& !this.dateWarning && !this.emailWarning && 
         !this.passwordWarning &&!this.passwordConfirmWarning && !this.passwordValidation &&
         !this.bigImageWarning && !this.smallImageWarning)
        {
             this.userService.addUser(firstName.value,lastName.value,username.value,city.value,country.value,date.value,email.value,aboutMe.value,
             smallIMage.value,bigImage.value,password.value)
              this.succesfullyRegistration=true;
              firstName.value="",lastName.value="",username.value="",city.value="",country.value="",date.value="",email.value="",aboutMe.value="",
              smallIMage.value="",bigImage.value="",password.value="",passwordConfirm.value="";
              window.scrollTo(0,0);
        }
        else
        {} 
    }

    onFocus(input:HTMLInputElement)
    {
        if(input.placeholder === "First name")
            this.firstNameWarning=false;
        else if(input.placeholder === "Last name")
            this.lastNameWarning=false;
        else if(input.placeholder === "User name")
            this.usernameWarning=false;
        else if(input.placeholder === "Your city")
            this.cityWarning=false;
        else if(input.placeholder === "Your country")
            this.countryWarning=false;    
        else if(input.placeholder === "Email")
            this.emailWarning=false;
        else if(input.placeholder === "About yourself")
            this.abutMeWarning=false;
        else if(input.placeholder === "Profile picture")
            this.smallImageWarning=false;
         else if(input.placeholder === "Time line picture")
            this.bigImageWarning=false;
        else if(input.placeholder === "Password")
            this.passwordWarning=false;
        else if(input.placeholder === "Confirm Password")
        {
            this.passwordConfirmWarning=false;
            this.passwordValidation=false;
        }
        else this.dateWarning=false;
        this.succesfullyRegistration=false;
    }

}