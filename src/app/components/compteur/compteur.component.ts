import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})

export class CompteurComponent
{
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
