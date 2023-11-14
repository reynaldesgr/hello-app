import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})

export class CompteurComponent
{
  identifierIncrement : string = "b1";
  identifierDecrement : string = "b2";

  cpt: number = 0;

  onClickIncrement()
  {
    this.cpt++;
  }

  onClickDecrement()
  {
    this.cpt--;
  }

}
