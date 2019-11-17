import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../models/Product";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../models/api.response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:5001/api/productos/';

  getProducts() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getProductById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createProduct(product: Product): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, product);
  }

  updateProduct(product: Product): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
