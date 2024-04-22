import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import cartReducer from '../slice/cartSlice';



const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
