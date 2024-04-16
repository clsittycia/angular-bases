import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="decreaseBy(5)">-5</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(5)">+5</button>
    <button (click)="increaseBy(1)">+1</button>
    <h2>{{errorCounter}}</h2>
  `
})

export class CounterComponent {
  public counter:number = 10;
  public errorCounter:string = "";

  increaseBy(value:number):void {
    if (this.counter + value > 20) {
      this.errorCounter = "No puede aumentar mas de 20";
    }else{
      this.counter += value;
      this.errorCounter = "";
    }
  }

  decreaseBy(value:number):void {
    if (this.counter - value < 0) {
      this.errorCounter = "No puede disminuir mas de 0";
    }else{
      this.counter -= value;
      this.errorCounter = "";
    }
  }

  reset():void {
    this.counter = 10;
    this.errorCounter = "";
  }
}
