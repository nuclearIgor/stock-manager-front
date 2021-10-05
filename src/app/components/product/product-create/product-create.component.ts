import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    productName: '',
    stock: 0,
    inDate: ''
  }

  constructor(
      private productService: ProductService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  public addProduct(formData: NgForm): void {
    console.log(formData.value)
    let inputName = formData.value.productName

    if (inputName.split(' ').length > 1){
      let str = inputName.split(' ')
      this.product.productName = str.join("-")
    }
    if(inputName.split(' ').length === 1){
      this.product.productName = formData.value.productName
    }
    this.product.stock = formData.value.stock
    this.product.inDate =  new Date().toLocaleDateString('en-us')

    this.productService.create(this.product).subscribe(() => {
      this.router.navigate([''])
    })
  }

  cancel() {
    this.router.navigate([''])
  }
}
