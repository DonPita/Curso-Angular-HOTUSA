import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 45;

  //Esto es como si fuera un atributo
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //Esto ya es un getter en toda regla
  getHeroDescription(): string {
    //return this.name +' - ' + this.age
    return `${this.name} - ${this.age}`
  }

}




