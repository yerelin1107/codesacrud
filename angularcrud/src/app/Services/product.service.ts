import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductResponse{
  id: number,
  name:string,
  price:number

}

export interface ProductEditRespnse{
  status:Number,
  product: Object
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/product';
  private httpClient = inject(HttpClient);

  saveProduct(inputData: object): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/create`, inputData);
  }
  getProductLists(){
    return this.httpClient.get(`${this.apiUrl}/getAll`);
  }

  getProduct(productId:string){
    return this.httpClient.get(`${this.apiUrl}/${productId}`);
  }

  updateProduct(inputData:Object, productId:number){
    return this.httpClient.put(`${this.apiUrl}/${productId}`,inputData);
  }

  deleteProduct(productId:Number){
    return this.httpClient.delete(`${this.apiUrl}/${productId}`);
  }
}
