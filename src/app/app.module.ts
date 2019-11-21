import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductUpdateComponent } from './views/product-update/product-update.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';

import {ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductUpdateComponent,
    NotFoundComponent,
    ProductCreateComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
