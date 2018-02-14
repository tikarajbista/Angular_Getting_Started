import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../shared/product.service';
@Component({
    selector: 'rs-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false ;
    listFilter: string = 'cart';
    products: IProduct[] =[];
    error : any;

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    onStarClick(message: string): void{
        this.pageTitle = this.pageTitle +': ' + message;
    }
    constructor(private ps : ProductService){

    }
    ngOnInit(){
        this.ps.getProduct()
            .subscribe( data => this.products = data, 
                        err => this.error = <any>err);
    }
}