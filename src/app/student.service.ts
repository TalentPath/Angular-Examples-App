import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string = '/assets/data/students.json';
  constructor(private http:HttpClient) { }

  getStudents():Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.url);
  }

}
