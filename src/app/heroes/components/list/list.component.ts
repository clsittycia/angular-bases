import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor', 'Rocket'];
  public delHeroe?: string;

  popHeroe(): void {
    this.delHeroe = this.heroNames.pop();
  }
}
