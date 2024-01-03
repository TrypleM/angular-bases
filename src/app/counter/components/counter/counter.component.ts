import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Counter: {{counter}}
    </h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="dicreaseBy(3)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  dicreaseBy( value: number): void {
    if (this.counter > 0) {
      this.counter -= value;
      if (this.counter < 0) this.counter = 0;
    };
  }

  resetCounter() {
    this.counter = 10;
  }
}
