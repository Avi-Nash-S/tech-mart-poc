import { FormsActionType } from './forms.types';
import { SUCCESS } from '../action-type.util';
import store from '../store';

export const onSignUpSubmit = (value) => async dispatch => {
    const obj = {
        [value.email]: value.password
    };
    return dispatch({
        type: SUCCESS(FormsActionType.GET_PRODUCTS),
        payload: obj
    })
};

export const onSignInSubmit = (value) => {
    // workaround -> redux saga to be implemented
    const userDb = store.store.getState().data.userDB;
    if (userDb && userDb.hasOwnProperty(value.email) && value.password === userDb[value.email]) {
        alert(`${Object.keys(userDb)[0]} authenticated by ${Object.values(userDb)[0]}`)
    } else {
        alert('Error Logging in')
    }
}
