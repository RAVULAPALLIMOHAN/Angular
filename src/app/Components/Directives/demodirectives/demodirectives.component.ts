import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
  oddNum  = [1,3,5]; 
  evenNum =[2,4,6];
  constructor() { }
  onodd = false;
  ngOnInit(): void {
  }

}
