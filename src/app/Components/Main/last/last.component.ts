import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html'
})
export class LastComponent implements OnInit {

  @Input() data! : { type: string; name: string; content: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
