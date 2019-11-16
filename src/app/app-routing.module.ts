import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./views/product-list/product-list.component";
import { ProductDetailsComponent } from "./views/product-details/product-details.component";
import { ProductUpdateComponent} from "./views/product-update/product-update.component";
import { ProductDeleteComponent } from "./views/product-delete/product-delete.component";
import { ProductCreateComponent } from "./views/product-create/product-create.component";
import { NotFoundComponent } from './views/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'products/details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'products/update/:id/:product',
    component:ProductUpdateComponent
  },
  {
    path:'products/delete/:id',
    component:ProductDeleteComponent
  },
  {
    path:'products/create/:product',
    component:ProductCreateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
