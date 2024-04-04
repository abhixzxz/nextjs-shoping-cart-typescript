import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';

const rootReducer = combineReducers({
  products: productReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
