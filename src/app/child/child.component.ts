import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() loggedIn:boolean=false;
  @Output() greetEvent = new EventEmitter();
  username:string="terra";
  message:string='';
  
  constructor() { }

  ngOnInit(): void {
  }
  callParentGreet(){
    this.greetEvent.emit(this.message);
  }
}
