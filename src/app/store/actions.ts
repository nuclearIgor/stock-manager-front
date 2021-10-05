import {createAction, props} from "@ngrx/store";
import {Product} from "../components/product/product.model";
// import {Product} from "../components/product/product.model";
//
//
// export const searchProducts = createAction('searchproduct', props<{input: string}>())
//
// export const onStart = createAction('startapp', props<{ products: Product[] }>())

export const loadProducts = createAction(
    '[Products Effects] Load Products'
);

export const loadProductsSuccess = createAction(
    '[Products Effects] Load Products Success',
    props<{products: Product[]}>()
)

export const loadProductsFailure = createAction(
    '[Products Effects] Load Products Failure',
    props<{error: any}>()
)