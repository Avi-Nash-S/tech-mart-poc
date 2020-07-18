import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './products/products.reducer.js';
import { reducer as formReducer } from 'redux-form'
import formsReducer from './forms/forms.reducer.js';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products']
};

const rootReducer = combineReducers({
    products: productsReducer,
    form: formReducer,
    data: formsReducer
});


export default persistReducer(persistConfig, rootReducer);
