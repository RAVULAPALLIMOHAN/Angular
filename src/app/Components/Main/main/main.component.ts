import { Component, OnInit } from '@angular/core';
import {Elements} from '../Element.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
server =['server1','server2'];
newserverName ="";
//serverElement:Elements[]=[];
serverElements:any = [];
newserverContent ="";
  constructor() { }

  ngOnInit(): void {
  }
  addServerBluePrint(){
    //this.serverElement.push(new Elements(this.newserverName,'blueprint',this.newserverName));
    this.serverElements.push({
      type:'blueprint',
      name:this.newserverName,
      content:this.newserverContent
    });
  }
  addServer(){
    this.serverElements.push({
      type:'server',
      name:this.newserverName,
      content:this.newserverContent
    });
  //this.serverElements.push(new Elements(this.newserverName,'server',this.newserverName));
  }

}
