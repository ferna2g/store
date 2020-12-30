import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`);
  }

  add(product: Product): Observable<Product>{
    // /products: POST
    return this.httpClient.post<Product>(`${PRODUCTS_URL}`, product);
  }

  get(id: string): Observable<Product> {
     //GET /products/id
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`);
  }

  update(product: Product): Observable<Product>{
    //UPDATE /products/id
    return this.httpClient.put<Product>(`${PRODUCTS_URL}/${product.id}`, product);
  }
}
