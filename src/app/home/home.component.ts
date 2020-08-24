import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateMessage:String;

  constructor() { 
    setInterval(
      ()=> {
        let currentDateTime= new Date();
        this.dateMessage = currentDateTime.toDateString() + ' ' + currentDateTime.toLocaleTimeString();
      }
    )
  }

  ngOnInit(): void {
  }

}
