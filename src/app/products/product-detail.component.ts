import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct[];
  
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
  }
  onBack():void{
    console.log('raj');
    this._router.navigate(['/products']);
  }

}
