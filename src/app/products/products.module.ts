import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
