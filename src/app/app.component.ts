import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "./components/product/product.model";
import * as productActions from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'stock-front';

  constructor(
      private store: Store<{products: Product[]}>
  ) {}

  ngOnInit() {
    // this.store.dispatch(productActions.loadProducts())
  }
}
