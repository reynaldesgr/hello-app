import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { StudentsComponent } from './students/students.component';
import { NamePrefixPipe } from './pipes/name-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompteurComponent,
    StudentsComponent,
    NamePrefixPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
