import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct = new EventEmitter<Product>();




  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.editProduct.emit(this.product);
  }


}
