import { ProductActionTypes } from './products.types';
import { SUCCESS, REQUEST, FAILURE } from './action-type.util';

const INITIAL_STATE = {
    products: [],
    pending: false
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST(ProductActionTypes.GET_PRODUCTS):
            return {
                ...state,
                pending: true
            };
        case SUCCESS(ProductActionTypes.GET_PRODUCTS):
            return {
                ...state,
                products: action.payload,
                pending: false
            };
        case FAILURE(ProductActionTypes.GET_PRODUCTS):
            return {
                ...state,
                products: [],
                pending: false
            };
        default:
            return state;
    }
};

export default productsReducer;
