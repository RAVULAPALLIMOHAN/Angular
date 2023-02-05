import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dis :boolean = false;
  constructor() { 
    setTimeout(() => {
      this.dis = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  name = "";
}
