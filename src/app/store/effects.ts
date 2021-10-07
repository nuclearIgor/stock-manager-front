import {Injectable} from "@angular/core";
import { createEffect, ofType, Actions} from "@ngrx/effects";
import * as productActions from './actions'
import {ProductService} from "../services/product.service";
import {mergeMap, map, catchError} from "rxjs/operators";
import {of} from "rxjs";



@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() => this.action$.pipe(
            ofType(productActions.loadProducts),
            mergeMap(() => this.productService.read()
                .pipe(
                    map(products => productActions.loadProductsSuccess({products})),
                    catchError(error => of(productActions.loadProductsFailure({error})))
                ))
        )
    );

    constructor(
        private action$: Actions,
        private productService: ProductService
    ) {}

}