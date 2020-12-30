import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'st-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductsService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadProducts();
  }

  deleteProduct(product: Product){
    this.service.delete(product.id)
    .subscribe(response => {
      console.log('Product has been deleted', response);
      this.loadProducts();
      this.snackBar.open('Product has been deleted', 'Close', {
        duration: 3000
      })
    })
  }

  private loadProducts(){
    this.service.getAll()
    .subscribe(result => this.products = result);
  }
}
