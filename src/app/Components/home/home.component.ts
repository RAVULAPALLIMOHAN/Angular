import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dis :boolean = false;
serverStatus :string ='Offline';
serverFor =['server1','server2'];
log:any =[];
  constructor() { 
    setTimeout(() => {
        this.dis = true;
      }, 2000);
  }


  ngOnInit(): void {
  }
  name = "";
  ServerName = "";
  onCreateServe(){
    this.ServerName = this.name;
    this.serverFor.push(this.ServerName);
  }
  getcolor(){
    return this.ServerName ==='Online' ? 'green':'red';
  }
  loop(){
   this.log.push(this.log.length +1);
  }
}
