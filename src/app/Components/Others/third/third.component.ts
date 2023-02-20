import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html'
})
export class ThirdComponent implements OnInit {
oddNumbers :number[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  onInterval(event:any){
   if(event ){
    this.oddNumbers.push(event);
   }
   
  }
}
