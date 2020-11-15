import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { baseURL } from 'src/shared/BaseURL';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  prod:Product;
  p: BehaviorSubject<Product>;

  

 

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(baseURL+'products');
  }
  getProduct(id: number):  Observable<Product>{
    return this.http.get<Product>(baseURL+'products/'+id);
  }
  setProduct(p: Product): Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
   return this.http.post<Product>(baseURL+'products',p,httpOptions);
  }
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    return this.http.delete<Product>(baseURL+'products/'+id);
    }
    updateProduct (id: number, product: Product): Observable<Product> {
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      };
      return this.http.put<Product>(baseURL+'products/'+ id, product,httpOptions);
      }
  incrementLike(id: Number){
   // PRODUCTS.filter(x=>x.id===id)[0].like++;
  }
  constructor(private http: HttpClient) {
    this.p=new BehaviorSubject(this.prod);
   }
   nextProd(prod: Product){
     this.p.next(prod);
   }
}
