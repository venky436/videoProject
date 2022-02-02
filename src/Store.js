import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./Reducers/LoginReducer";


import {CartReducer} from './Reducers/CartReducer'


let loginFromLocal = JSON.parse(localStorage.getItem("userInfo"));


let cartItemsFromLocal = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []



const reducer = combineReducers({
   
    userInfo : userLoginReducer,
    cart : CartReducer,
})

let initial = {
   userInfo : loginFromLocal,
   cart : {cartItems : cartItemsFromLocal}
}

let middleware_of = [thunk]

export const store = createStore(reducer,initial,composeWithDevTools(applyMiddleware(...middleware_of)))

