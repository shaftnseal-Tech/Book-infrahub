import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Correct default import
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers
import { getProductDetailsReducer, getProductReducer } from './reducer/productReducer';
// import { getProductDetails } from './actions/productActions';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
