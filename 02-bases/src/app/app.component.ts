import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  /*increaseBy(): void {
    this.counter +=1;
  }

  decreasedBy(): void {
    this.counter -=1;
  }

  resetCounter(): void {
    this.counter = 10;
  }*/
  //Mas corto
  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
