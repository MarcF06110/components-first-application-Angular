import { Component } from '@angular/core';

@Component({
  selector: 'firstApp',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>
      Bonjour {{ name }} ! Comment tu vas?
    </p>
  `
})
export class AppComponent {
  public name:string;

  constructor() {
    this.name = 'Macademia';
  }
}
