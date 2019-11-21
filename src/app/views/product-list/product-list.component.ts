import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    private router: Router, 
    private apiService: ProductService
    ) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  deleteProduct(product: Product): void {
    this.apiService.deleteProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProduct(product: Product): void {
    this.router.navigateByUrl(`/products/update/${product.id}`);
  };

  addProduct(): void {
    this.router.navigateByUrl(`/products/create`);
  };

}
