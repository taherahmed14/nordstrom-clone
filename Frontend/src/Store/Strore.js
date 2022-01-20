import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer , productDetailsReducer} from '../Features/Product/reducer';

import { reducer as registerReducer } from "../Features/Register/reducer"; 


const reducer = combineReducers({
      productsState : productReducer,
      productsDetailState : productDetailsReducer,
      registerState : registerReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
