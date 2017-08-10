import { Component } from '@angular/core';

@Component({
    selector: "follow-panel", 
    template: 
    `
     <div class="col-md-3">
   <div class="panel panel-default text-center">
      <div class="panel-body">
         <div><strong>Koga Pratiti</strong></div>
         <div class="row">
            <hr>
            <div class="col-xs-3">
               <div class="big-box">
                  <img src="https://pbs.twimg.com/profile_images/785814072075907072/ZoMi_QkU_normal.jpg" class="img-thumbnail" >
               </div>
            </div>
            <div class="col-xs-6">
               <div class="row text_left">
                  <div><strong>NK Osijek</strong> @nkosijek</div>
                  <a class="btn btn-default follow-btn" href="#" role="button"> <i class="fa fa-plus" aria-hidden="true"></i> Slijedi</a>
               </div>
            </div>
         </div>
         <hr>
         <div class="row">
            <div class="col-xs-3">
               <div class="big-box">
                  <img src="https://pbs.twimg.com/profile_images/686576914916597760/OY475ev3_normal.png" class="img-thumbnail" >
               </div>
            </div>
            <div class="col-xs-6">
               <div class="row text_left">
                  <div><strong>Naš Hajduk</strong> @nas_hajduk</div>
                  <a class="btn btn-default follow-btn" href="#" role="button"> <i class="fa fa-plus" aria-hidden="true"></i> Slijedi</a>
               </div>
            </div>
         </div>
         <hr>
         <div class="row">
            <div class="col-xs-3">
               <div class="big-box">
                  <img src="https://pbs.twimg.com/profile_images/748482794205122560/_xKDpDIv_normal.jpg" class="img-thumbnail" >
               </div>
            </div>
            <div class="col-xs-6">
               <div class="row text_left">
                  <div><strong>FK Crvena zvezda</strong> @FKCZ</div>
                  <a class="btn btn-default follow-btn" href="#" role="button"> <i class="fa fa-plus" aria-hidden="true"></i> Slijedi</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    `
})
export default class FollowPanel {
    constructor(){
    }
}