import { Pipe, PipeTransform } from '@angular/core';

import Tweet from './../model/tweet';

@Pipe({name: 'timePipe'})
export default class timePipe implements PipeTransform {
  transform(time:number){
        var sec:number = time;
        var min:number;
        var h:number;
        var day:number;   
        min = Math.floor(sec / 60);
        sec = sec % 60;
        h = Math.floor(min / 60);
        min = min % 60;
        day = Math.floor(h / 24);
        h = h % 24;
        var fullTime:string = "";
        if(day != 0)
            fullTime = fullTime +  day.toString() + "d "
        if(h != 0)
            fullTime = fullTime +  h.toString() + "h "
        if(min != 0)
            fullTime = fullTime +  min.toString() + "min "
        if(day === 0 && h === 0 && min === 0)
          return "1 min" 
        else
          return fullTime
      }
}