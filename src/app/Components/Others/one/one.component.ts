import { Component, OnInit,Output,EventEmitter } from '@angular/core';
//import { clearInterval } from 'timers';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html'
})
export class OneComponent implements OnInit {
   @Output() intervalFired = new EventEmitter<number>();
   interval:any;
   lastnumber:number =0;
  constructor() { }

  ngOnInit(): void {
  }
  onStart(event:any){
   this.interval = setInterval(() =>{
    this.intervalFired.emit(this.lastnumber + 1)
    this.lastnumber ++;
   },1000);
  }
  onPause(event:any){
   clearInterval(this.interval);
  }

}
