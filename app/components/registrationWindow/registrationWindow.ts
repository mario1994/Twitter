import { Component } from '@angular/core';

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
				                    	<div class="form-group">
				                    		<label class="sr-only" for="form-first-name">First name</label>
				                        	<input type="text" name="form-first-name" placeholder="First name..." class="form-first-name form-control" id="form-first-name">
				                        </div>
				                        <div class="form-group">
				                        	<label class="sr-only" for="form-last-name">Last name</label>
				                        	<input type="text" name="form-last-name" placeholder="Last name..." class="form-last-name form-control" id="form-last-name">
				                        </div>
                                        <div class="form-group">
				                    		<label class="sr-only" for="form-username">User name</label>
				                        	<input type="text" name="form-user-name" placeholder="User name..." class="form-user-name form-control" id="form-user-name">
				                        </div>
                                        <div class="form-group">
				                    		<label class="sr-only" for="form-town">User name</label>
				                        	<input type="text" name="form-town" placeholder="Your town..." class="form-town form-control" id="form-town">
				                        </div>
                                        <div class="form-group">
                                            <label class="sr-only" for="form-data">DATE</label>
                                            <input class="form-control" name="form-data" type="date" placeholder="Data..." id="date-input">

                                        </div>
				                        <div class="form-group">
				                        	<label class="sr-only" for="form-email">Email</label>
				                        	<input type="email" name="form-email" placeholder="Email..." class="form-email form-control" id="form-email">
				                        </div>
				                        <div class="form-group">
				                        	<label class="sr-only" for="form-about-yourself">About yourself</label>
				                        	<textarea name="form-about-yourself" placeholder="About yourself..." 
				                        	class="form-about-yourself form-control" id="form-about-yourself"></textarea>
				                        </div>
                                        <div class="form-group row">
                                            <label for="password-input" class="form-label" id="label-password">Password:</label>
                                                <input class="form-control" type="password" placeholder="Password..."  id="password-input">
                                        </div>
                                        <div class="form-group row">
                                            <label for="passwordConfirm-input" class="sr-only">Password</label>
                                                <input class="form-control" type="password" placeholder="Confirm Password..."  id="passwordConfirm-input">
                                        </div>
				                        <button class="btn btn-primary btn-lg btn-block router-link" routerLink="/login" routerLinkActive="active">Sign up</button>
				                    </form>
			                    </div>
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
export default class RegistrationWindow{

    constructor(){
    }
}