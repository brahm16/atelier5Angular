import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProduct: Product[];
  priceMax: Number=0;
  showForm:Boolean=false;
  errMess: string;

  constructor(private productService: ProductService,
    @Inject('baseURL') private baseURL) { }

    incrementLike(product: Product){

      this.productService.incrementLike(product.id)
      console.log("test")
    }
    show(){
      this.showForm=!this.showForm;
    }
    addProduct(product: Product){
      this.listProduct.push(product);
      console.log(product);
      this.productService.setProduct(product).subscribe(p=>{product=p});
      console.log("test")
      this.showForm=!this.showForm;
   
     
  
    }
    showFormM(){
      this.showForm=!this.showForm;
  
  
    }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{this.listProduct=products},
    errmess => {this.errMess = <any>errmess});
  }

}
