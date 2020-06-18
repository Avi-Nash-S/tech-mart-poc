import axios from 'axios';
import { ProductActionTypes } from './products.types';
import { REQUEST, SUCCESS, FAILURE } from './action-type.util';

const endPoint = 'https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts';


export const getProducts = (pageNo = 1, pageSize = 8) => async dispatch => {
    const requestUrl = `${endPoint}/${pageNo}/${pageSize}`;
    dispatch({ type: REQUEST(ProductActionTypes.GET_PRODUCTS) })
    axios.get(requestUrl).then(response => {
        return dispatch({
            type: SUCCESS(ProductActionTypes.GET_PRODUCTS),
            payload: response.data
        })
    }, err => {
        return dispatch({
            type: FAILURE(ProductActionTypes.GET_PRODUCTS),
            error: err
        })
    })
};
