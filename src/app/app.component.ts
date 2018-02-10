import { Component } from '@angular/core';
@Component({
  selector: 'rs-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <div>My First Component</div>
    </div>
  `
})
export class AppComponent {
  title: string = 'Room Sewa';
}