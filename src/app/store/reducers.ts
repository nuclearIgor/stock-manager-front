import { Action, createReducer, on} from '@ngrx/store'
import * as productActions from './actions'
import {Product} from "../components/product/product.model";

export interface State {
    products: Product[]
}

export const initialState: State = {
    products: []
}

const productsReducer = createReducer(
    initialState,
    on(productActions.loadProductsSuccess, (state, {products}) =>
    // (console.log(`payload: ${products}`), console.log(`reducer state: ${state.products}`), {products: products}))
    (console.log(products), console.log(state.products), {products: products}))

)

export function reducer(state: State | undefined, action: Action) {
    return productsReducer(state, action)
}