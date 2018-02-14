import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';
@Component({
  selector: 'rs-root',
  template: `
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class= 'nav navbar-nav'>
          <li> <a [routerLink] = "['/home']">Home</a></li>
          <li> <a [routerLink] = "['/products']"> Product List</a> </li>
        </ul>
      </div>
    </nav>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
  `,
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'Room Sewa';
 
}