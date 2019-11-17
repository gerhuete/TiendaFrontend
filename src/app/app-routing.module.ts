import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./views/product-list/product-list.component";
import { ProductUpdateComponent} from "./views/product-update/product-update.component";
import { ProductCreateComponent } from "./views/product-create/product-create.component";
import { NotFoundComponent } from './views/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'products/update/:id',
    component:ProductUpdateComponent
  },
  {
    path:'products/create',
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
