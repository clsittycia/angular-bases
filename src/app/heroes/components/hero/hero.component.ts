import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public alterego: string = "Ironman";
  public name: string = "tony stark";
  public age: number = 45;
  public id_name: number = 1;
  public id_age: number = 1;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHerodDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    if (this.id_name == 1) {
      this.alterego = 'Spiderman';
      this.name = 'piter parker';
      this.id_name = 0;
    }else{
      this.alterego = 'Ironman';
      this.name = 'tony stark';
      this.id_name = 1;
    }

  }

  changeAge(): void {
    if (this.id_age == 1) {
      this.age = 45;
      this.id_age = 0;
    }else{
      this.age = 35;
      this.id_age = 1;
    }
  }

  resetForm(): void {
    this.alterego = "Ironman";
    this.name = "tony stark";
    this.age = 45;
    this.id_name = 1;
    this.id_age = 1;

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
