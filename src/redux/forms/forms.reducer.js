import { FormsActionType } from './forms.types';
import { SUCCESS } from '../action-type.util';

const INITIAL_STATE = {
    userDB: null
};

const formsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESS(FormsActionType.SUBMIT_FORM):
            return {
                ...state,
                userDB: Object.assign(action.payload, state.userDB)
            };
        default:
            return state;
    }
};

export default formsReducer;
