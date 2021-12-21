import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { IStudent } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observeOf:string[]=[]
  observeFrom:string[]=[]
  students:IStudent[]=[]
  videoGames:string[] = ['Tomb Raider', 'Call of Duty', 'Mario Bros', 'The Last Of Us']
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data=>this.students = data);
  }

  clickMe(){
    let ObservableOf = of(this.videoGames);
    let ObservableFrom = from(this.videoGames);

    ObservableOf.subscribe(item=>this.observeOf);
    ObservableFrom.subscribe(console.log);
    

   
  }
}
