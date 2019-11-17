import { Component, OnInit , Inject} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router, private apiService: ProductService) { }

  ngOnInit() {
    let productId = this.route.snapshot.params['id'];
    if(!productId) {
      alert("Invalid action.")
      this.router.navigateByUrl('/');
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
      categorias: ['', Validators.required]
    });
    this.apiService.getProductById(+productId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/');
        },
        error => {
          alert(error);
        });
  }

}
