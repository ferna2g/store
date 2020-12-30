import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'st-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  id: string;

  constructor(private route: ActivatedRoute,
              private service: ProductsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // GET /products/id
    this.service.get(this.id)
        .subscribe(product => {
          console.log('product', product);
          //this.form.setValue(product);
          this.form.patchValue(product);
        });
  }

  submit(){
    if(this.form.valid){
      const product = this.form.value;
      product.id = this.id;
      console.log('going to update', product);
      this.service.update(product)
      .subscribe(result => console.log('update finished', result));

      )
    }
  }

  cancel() {

  }

}
