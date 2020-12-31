import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Product } from '../shared/models/product';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'st-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private service: ProductsService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submit(product: Product){
      console.log('Going to save', product);
      this.service.add(product)
        .pipe(
          catchError(error => {
            this.snackBar.open(error, null, {
              duration: 3000
            });
            return EMPTY;
          })
        )
        .subscribe(result => {
          console.log('The product has been added', result);
          this.router.navigate(['']);
          //mensaje de confirmacion
          this.snackBar.open('Product has been added', 'Close', {
            duration: 3000 //miliseconds
          })
        })
  }

  cancel(){
    this.router.navigate([''])
  }

}
