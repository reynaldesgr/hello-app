import { Component } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  readonly STUDENTS: Student[] = [
    { id: 1, name: 'John Doe',      dateOfBirth: new Date('1990-01-01'), gender: 'Male',   courseFee: 5000 },
    { id: 2, name: 'Jane Doe',      dateOfBirth: new Date('1992-05-15'), gender: 'Female', courseFee: 5500 },
    { id: 3, name: 'Alice Johnson', dateOfBirth: new Date('1988-08-20'), gender: 'Female', courseFee: 4800 },
    { id: 4, name: 'Bob Smith',     dateOfBirth: new Date('1995-03-10'), gender: 'Male',   courseFee: 5100 },
    { id: 5, name: 'Eva Williams',  dateOfBirth: new Date('1998-11-25'), gender: 'Female', courseFee: 5200 }
  ];

  // Other component logic goes here
}
