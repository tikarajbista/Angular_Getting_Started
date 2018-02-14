import { Injectable } from "@angular/core";
import { IProduct } from "../products/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{
    url = '../api/products/products.json';
    constructor(private _http: HttpClient) {}
    getProduct(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.url)
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);

    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}