import { FormsActionType } from './forms.types';
import { SUCCESS } from '../action-type.util';
import { SubmissionError } from 'redux-form'
import store from '../store';

export const onSignUpSubmit = (value) => async dispatch => {
    const obj = {
        [value.email]: value.password
    };
    const userDb = store.store.getState().data.userDB;
    if (!userDb || (userDb && !userDb.hasOwnProperty(value.email))) {
        return dispatch({
            type: SUCCESS(FormsActionType.SUBMIT_FORM),
            payload: obj
        })
    } else {
        throw new SubmissionError({ _error: 'User Already exists' })
    }
};

export const onSignInSubmit = (value) => async dispatch => {
    // workaround -> redux saga to be implemented
    const userDb = store.store.getState().data.userDB;
    if (userDb && userDb.hasOwnProperty(value.email) && value.password === userDb[value.email]) {
        return dispatch({
            type: SUCCESS(FormsActionType.SUBMIT_FORM),
            payload: userDb
        })
    } else if (userDb && userDb.hasOwnProperty(value.email)) {
        throw new SubmissionError({ _error: 'Password does not Match' })
    } else if (userDb && value.password !== userDb[value.email]) {
        throw new SubmissionError({ _error: 'User does not exist' })
    }
}
