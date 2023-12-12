import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { RegisterStudentComponent } from './register-student/register-student.component';


const appRoutes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'register', component: RegisterStudentComponent},
  { path: '**', redirectTo: 'students' }, // Redirection vers 'students' en cas d'URL inconnue
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
