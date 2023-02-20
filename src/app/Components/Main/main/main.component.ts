import { Component, OnInit } from '@angular/core';
import {Elements} from '../Element.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
server =['server1','server2'];

//serverElement:Elements[]=[];
serverElements:any = [];

  constructor() { }

  ngOnInit(): void {
  }
  onServer(serverData : {serverName:string,serverContent:string})
  {
    debugger
    this.serverElements.push({
         type:'server',
         name:serverData.serverName,
         content:serverData.serverContent
  })
}
onblueprint(blueprintDara:{serverName:string,serverContent:string}){
  debugger
  this.serverElements.push({
    type:'blueprint',
    name:blueprintDara.serverName,
    content:blueprintDara.serverContent
})
}


}
