import { Component } from '@angular/core';

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
                    <input type="text" class="form-control input-lg" placeholder="Email">
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control input-lg" placeholder="Password">
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary btn-lg btn-block router-link" routerLink="/home" routerLinkActive="active">Sign In</button>
                    <span class="pull-right"><a class="router-link" routerLink="/registration" routerLinkActive="active">Register</a></span><span><a href="#">Need help?</a></span>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="col-md-12">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                </div>	
            </div>
        </div>
        </div>
    </div>
    `
})
export default class LoginWindow{

    constructor(){
    }
}