import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ProductService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      //id: [],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      categorias: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/']);
      });
  }


}
