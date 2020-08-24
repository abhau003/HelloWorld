import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimateChildOptions } from '@angular/animations';
import { SelectorMatcher } from '@angular/compiler';
import { TestService } from './test.service';
import { Comments } from './comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _TestService: TestService ){
  }

  lstcomments:Comments[];

  ngOnInit(){

    console.log("AAA");
    this._TestService.getComments()
    .subscribe
    (
      data =>
      {
        this.lstcomments = data;
      }
    )
  }
}
