import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  products: Product[]
  displayedColumns = ['productName', 'stock', 'inDate', 'outDate']

  constructor(
      private productService: ProductService,
      private router: Router,
      private store: Store<{products: Product[]}>
              ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => this.products = products)
  }

  redirect(productName: string): void {
    this.router.navigate([`/product/${productName}`])
  }
}
