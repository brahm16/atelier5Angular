import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product: Product;
  showForm:Boolean=false;

//this.router.navigate(['/user', 5]) route parametrer

  constructor(private productService:ProductService,private router: Router) { 

    this.productService.p.subscribe(c=>{
      this.product=c;
    })
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe();
    this.router.navigate(['/home'])

  }
  update(){
    this.productService.updateProduct(this.product.id,this.product).subscribe();
    this.router.navigate(['/home'])

  }
    show(){
      this.showForm=!this.showForm;
    }



  ngOnInit(): void {

  }

}
