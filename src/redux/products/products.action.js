import axios from 'axios';
import { ProductActionTypes } from './products.types';
import { REQUEST, SUCCESS, FAILURE } from '../action-type.util';

const endPoint = 'https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts';

export const getProductsSuccess = response => ({
    type: SUCCESS(ProductActionTypes.GET_PRODUCTS),
    payload: response.data
})

export const getProductsRequest = () => ({
    type: REQUEST(ProductActionTypes.GET_PRODUCTS)
})

export const getProductsFailure = err => ({
    type: FAILURE(ProductActionTypes.GET_PRODUCTS),
    error: err
})


export const getProducts = (pageNo = 1, pageSize = 8, query) => {
    return dispatch => {
        const requestUrl = `${endPoint}/${pageNo}/${pageSize}` + (query ? query : '');
        dispatch(getProductsRequest())
        axios.get(requestUrl).then(response => {
            dispatch(getProductsSuccess(response))
        }, err => {
            dispatch(getProductsFailure(err))
        })
    }
};
