import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      tutor:        ['', []]
    });

    /*this.myForm.get('dateOfBirth')?.valueChanges.subscribe((dateOfBirth) => {
      this.updateTutorValidator(dateOfBirth);
    });*/
  }

  // + c.f. cours pour gérer le tutor
  /*private updateTutorValidator(dateOfBirth: string): void {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      this.myForm.get('tutor')?.setValidators([Validators.required]);
    } else {
      this.myForm.get('tutor')?.clearValidators();
    }

    this.myForm.get('tutor')?.updateValueAndValidity();
  }*/

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

