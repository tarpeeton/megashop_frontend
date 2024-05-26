// index.js yoki rootReducer.js

import { combineReducers, createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

// Reducerlarni import qilish
import authSlice from "../slice/authSlice.js";
import producSlice from "../slice/productSlice.js";
// Reducerlarni Combine qilish
const rootReducer = combineReducers({
    auth: authSlice,
    product: producSlice
});

// Thunk Middleware ni qo'llash
const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store
// Store ni eksport qilish
export default store;
