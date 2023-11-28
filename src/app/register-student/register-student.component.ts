import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})


export class RegisterStudentComponent implements OnInit
{
  myForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void
  {
    this.myForm =
    this.fb.group({
      id:           ['', [Validators.required]],
      name:         ['', [Validators.required]],
      dateOfBirth:  ['', [Validators.required]],
      gender:       ['', [Validators.required]],
      courseFee:    ['', [Validators.required]],
      hasTutor:     ['', [Validators.required]],

      tutor: this.fb.group(
        {
        firstName: ['', [Validators.required]],
        lastName:  ['', [Validators.required]]
      })
    });
  }

 // Update the 'picture' field based on the selected 'gender'
 private updatePictureBasedOnGender(gender: string): string {
  const defaultMalePicture = 'https://www.w3schools.com/howto/img_avatar.png';
  const defaultFemalePicture = 'https://www.w3schools.com/howto/img_avatar2.png';

  // Update the 'picture' field based on the 'gender' value

  return gender === 'Female' ? defaultFemalePicture : defaultMalePicture;

}

  onSubmit(): void
  {
    if (this.myForm.valid)
    {
      console.log('Données du formulaire : ', this.myForm.value);
    }
  }

}

