// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './slice/productSlice';
import cartReducer from './slice/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer, // Include cart reducer here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);
