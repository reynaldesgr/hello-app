import { Component, EventEmitter, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { Student } from '../model/student';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})


export class RegisterStudentComponent implements OnInit
{
  myForm!: FormGroup;

  // Event emitter : pour ajouter un student dans la liste (composant parent)
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();

  private idCounter : number = 6;

  constructor(private fb: FormBuilder){}
  ngOnInit(): void
  {
    this.myForm =
    this.fb.group({
      name:         ['', [Validators.required]],
      dateOfBirth:  ['', [Validators.required]],
      gender:       ['', [Validators.required]],
      courseFee:    ['', [Validators.required]],
    });
  }

 // Update the 'picture' field based on the selected 'gender'
 private pictureBasedOnGender(gender: string): string {
    const defaultMalePicture   = 'https://www.w3schools.com/howto/img_avatar.png';
    const defaultFemalePicture = 'https://www.w3schools.com/howto/img_avatar2.png';

    // Update the 'picture' field based on the 'gender' value
    return gender === 'Female' ? defaultFemalePicture : defaultMalePicture;
  }

  onSubmit(): void {
    if (this.myForm.valid)
    {
      const newStudent : Student =
      {
        id : 'STD' + this.idCounter++,
        ...this.myForm.value, // Inclut tout les autres champs du formulaire (apart 'id')
        picture : this.pictureBasedOnGender(this.myForm.value.gender)
      }
      this.addStudent.emit(newStudent);

      this.myForm.reset();
    }
  }
}

