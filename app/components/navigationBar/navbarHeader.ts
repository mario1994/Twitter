import { Component } from '@angular/core';

@Component({
    selector: "navbar-header", 
    template: 
    `
      <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1" aria-expanded="false">
         <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         </button>
      </div>
      
    `
})
export default class NavbarHeader {

    constructor(){
    }
}