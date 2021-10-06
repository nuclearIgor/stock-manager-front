import {Component, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as productActions from '../../../store/actions'
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  products: Product[]
  // products$: Observable<Product[]> = this.store.select(state => state.products)
  displayedColumns = ['actions', 'productName', 'stock', 'inDate', 'outDate', 'delete']

  constructor(
      private productService: ProductService,
      private router: Router,
      private store: Store<{products: Product[]}>
              ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => this.products = products)
    // this.store.dispatch(productActions.loadProducts())
  }

  redirect(productName: string): void {
    this.router.navigate([`/product/${productName}`])
  }
}
