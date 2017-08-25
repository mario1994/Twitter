import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import  User  from './../../model/user';

@Component({
    selector: "login-window", 
    template: 
    `
    <div id="login" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="text-center" id="loginInHeader">Twitter Login <i class="fa fa-twitter" aria-hidden="true"></i></h1>
            </div>
            <div class="modal-body">
                <form class="form col-md-12 center-block">
                    <div class="form-group">
                    <input type="text" class="form-control input-lg" #email (focus)="onFocus(email)" placeholder="Email">
                    <span class="control-label warning" *ngIf="emailWarning">
                         You need to fill up this form
                    </span>
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control input-lg" #password (focus)="onFocus(password)" placeholder="Password">
                    <span class="control-label warning" *ngIf="passwordWarning">
                         You need to fill up this form
                    </span>
                    <p class="control-label warningInvalid" *ngIf="invalidInput">
                         Invalid email or password !!!
                    </p>
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary btn-lg btn-block router-link"  (click)="signIn(email,password)" routerLink="/home" routerLinkActive="active">Sign In</button>
                    <span class="pull-right"><a class="router-link" routerLink="/registration" routerLinkActive="active">Register</a></span><span><a href="#">Need help?</a></span>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="col-md-12">
                </div>	
            </div>
        </div>
        </div>
    </div>
    `
})
export default class LoginWindow implements OnInit{
    @Input() public User: User;
    returnUrl: string;
    public emailWarning:boolean=false;
    public passwordWarning:boolean=false;
    public invalidInput:boolean = false;

    private userService: UserService;
    private route: ActivatedRoute;
    private router: Router;
    private authService: AuthService;
    
    constructor(userService: UserService, route: ActivatedRoute, router: Router, authService: AuthService){
        this.userService = userService;
        this.route=route;
        this.router=router;
        this.authService=authService;
    }

     ngOnInit() {
        this.authService.logOut();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    signIn(email:HTMLInputElement, password:HTMLInputElement){
        if(email.value === "")
            this.emailWarning=true;
        else 
            this.emailWarning=false;
          if(password.value === "")
            this.passwordWarning=true;
        else 
            this.passwordWarning=false;

        if(email.value && password.value)
        {
              this.authService.logIn(email.value, password.value)
            .subscribe(
                data => {
                    this.returnUrl = '/home';
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("Greška brate")
                    this.invalidInput=true;
                });
        }
        else{}
    }

    onFocus(input:HTMLInputElement)
    {
        if(input.placeholder === "Email")
            this.emailWarning=false;
        if(input.placeholder === "Password")
            this.passwordWarning=false;
    }
     
}