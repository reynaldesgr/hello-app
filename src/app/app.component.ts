import { Component } from '@angular/core';
import { Personne } from './model/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Hello World ";

  personne: Personne = {
    firstName: 'John',
    lastName: 'Doe'
  };

}
