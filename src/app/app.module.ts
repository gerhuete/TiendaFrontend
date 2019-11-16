import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductUpdateComponent } from './views/product-update/product-update.component';
import { ProductDeleteComponent } from './views/product-delete/product-delete.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    NotFoundComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
