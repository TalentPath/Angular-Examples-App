import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userLoggedIn:boolean=false;
  messageFromChild:string='';
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.userLoggedIn=true;
  }

  logout(){
    this.userLoggedIn=false;
  }

  greet(value:string){
    this.messageFromChild=value;
  }

}
