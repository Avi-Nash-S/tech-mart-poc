import { FormsActionType } from './forms.types';
import { SUCCESS } from '../action-type.util';
import store from '../store';

export const onSignUpSubmit = (value) => async dispatch => {
    const obj = {
        [value.email]: value.password
    };
    return dispatch({
        type: SUCCESS(FormsActionType.SUBMIT_FORM),
        payload: obj
    })
};

export const onSignInSubmit = (value) => async dispatch => {
    // workaround -> redux saga to be implemented
    const userDb = store.store.getState().data.userDB;
    if (userDb && userDb.hasOwnProperty(value.email) && value.password === userDb[value.email]) {
        alert(`${Object.keys(userDb)[0]} authenticated by ${Object.values(userDb)[0]}`)
        return dispatch({
            type: SUCCESS(FormsActionType.SUBMIT_FORM),
            payload: userDb
        })
    } else {
        alert('Error Logging in')
    }
}
