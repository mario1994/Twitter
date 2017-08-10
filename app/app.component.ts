import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
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
   `
})
export class AppComponent { 
 
 }
