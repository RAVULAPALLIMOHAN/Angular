import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {
@Input() numbers:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
