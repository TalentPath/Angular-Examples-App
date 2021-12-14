import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics:Topics[]=[
    { topic:'Data Binding',path:'binding'},
    { topic:'Forms',path:'forms'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
type Topics={topic:string,path:string};
