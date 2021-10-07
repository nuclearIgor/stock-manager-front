import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'stock-front';



  constructor(
      private store: Store<{products: Product[]}>,
  ) {}

  ngOnInit() {
    // this.store.dispatch(productActions.loadProducts())
  }


}
