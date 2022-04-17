import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  cartReducer  from './cart.slice';
import  productReducer  from './product.slice';
import  orderReducer  from './order.slice';
import authSlice from './auth.slice';
import storage from "redux-persist/lib/storage";
// import persistReducer from 'redux-persist/es/persistReducer';
import {persistReducer} from 'redux-persist';
import userSlice from './user.slice';


// import { cartReducer } from './cart.slice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth'],
}
const reducer = combineReducers({
  user: userSlice,
  cart: cartReducer,
  product: productReducer,
  order: orderReducer,
  auth: authSlice,
})
const prsistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer : prsistedReducer,
});
export default store;
