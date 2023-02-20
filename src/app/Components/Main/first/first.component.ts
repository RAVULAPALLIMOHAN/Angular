import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
  @Output() serverCreater = new EventEmitter<{serverName:string,serverContent:string}>();
  //@Output() bluePrint = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrint : EventEmitter<any> = new EventEmitter<any>();
  newserverName ="";
  newserverContent ="";
  constructor() { }

  ngOnInit(): void {
  }
  addServerBluePrint(bluePrint  :HTMLElement){
    debugger
    console.log(bluePrint);
    this.serverCreater.emit({serverName :this.newserverName,serverContent:this.newserverContent});
  }
  addServer(serveName :HTMLElement){
    debugger
   this.bluePrint.emit({serverName:this.newserverName,serverContent:this.newserverContent});
  }
}
