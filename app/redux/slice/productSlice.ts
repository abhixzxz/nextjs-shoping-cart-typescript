import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string | StaticImageData;
  battery: string;
  camera: string;
  display: string;
  processor: string;
  ram: string;
  rom: string;
  rating: string;
  description: string;
  companyName:string;
}

interface CartState {
  products: Product[];
  selectedProduct: Product | null;
  filteredProducts: Product[]; 
}

const initialState: CartState = {
  products: [],
  selectedProduct: null,
  filteredProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { selectProduct, setFilteredProducts } = productSlice.actions;

export const selectProductList = (state: { products: CartState }) => state.products.filteredProducts;

export const selectSelectedProduct = (state: { products: CartState }) => state.products.selectedProduct;

export default productSlice.reducer;
