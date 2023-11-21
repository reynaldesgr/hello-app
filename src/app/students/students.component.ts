import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  STUDENTS: Student[] = [
    { id: "std1", name: 'John Doe',      dateOfBirth: new Date('1990-01-01'), gender: 'Male',   courseFee: 5000, picture: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: "std2", name: 'Jane Doe',      dateOfBirth: new Date('1992-05-15'), gender: 'Female', courseFee: 5500, picture: 'https://www.w3schools.com/howto/img_avatar.png'},
    { id: "std3", name: 'Alice Johnson', dateOfBirth: new Date('1988-08-20'), gender: 'Female', courseFee: 4800, picture: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { id: "std4", name: 'Bob Smith',     dateOfBirth: new Date('1995-03-10'), gender: 'Male',   courseFee: 5100, picture: 'https://www.w3schools.com/howto/img_avatar2.png'},
    { id: "std5", name: 'Eva Williams',  dateOfBirth: new Date('1998-11-25'), gender: 'Female', courseFee: 5200, picture: 'https://www.w3schools.com/howto/img_avatar.png'}
  ];

  @Input()
  student!: Student;
  @Input() picture : string | undefined;
  @Output()
  delete!: EventEmitter<number>;

  // Delete a student based on his/her id
  onDeleteStudent(studentId: string) {
    this.STUDENTS = this.STUDENTS.filter(student => student.id !== studentId);
  }
}
