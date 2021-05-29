import { createStore, combineReducers } from 'redux';
import categories from './categories';
import thunk from 'redux-thunk';
import products from './products';
const reducers = combineReducers({ products: products, categories: categories });
const store = () => {
    return createStore(reducers, applyMiddleware(thunk));
};

export default store();