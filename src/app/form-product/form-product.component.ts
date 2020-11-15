import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  product:Product;
  @Output() notification = new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
    
  }
  onSubmit(){
    this.product.like=0;
    this.notification.emit(this.product);
  }

}
