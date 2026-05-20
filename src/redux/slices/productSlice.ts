import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IProduct, IProductInitialState, IProductResponse } from "../../interface/product.interface";
import axios, { type AxiosResponse } from "axios";


const initialState: IProductInitialState = {
    error: null,
    products: [],
    loading: false,
    selectedProduct: null
}


export const fetchProductAction = createAsyncThunk<IProduct[]>("product/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const { data: { products } }: AxiosResponse<IProductResponse> = await axios({
            method: "GET",
            url: "https://dummyjson.com/products"
        })

        return products;

    } catch (error) {
        return rejectWithValue("Failed to fetch products");
    }
})

export const fetchProductById = createAsyncThunk<IProduct, { productId: number }>("/product/fetchProductById", async ({ productId }, { rejectWithValue }) => {
    try {
        const { data: product }: AxiosResponse<IProduct> = await axios({
            method: "GET",
            url: `https://dummyjson.com/products/${productId}`
        })

        return product;

    } catch (error) {
        return rejectWithValue("Failed to fetch products");
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProductAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(fetchProductAction.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        })


        builder.addCase(fetchProductAction.rejected, (state,) => {
            state.loading = false;
            state.products = [];
            state.error = "Failed to fetch products";
        })


        builder.addCase(fetchProductById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.selectedProduct = payload;
        })

        builder.addCase(fetchProductById.rejected, (state) => {
            state.loading = false;
            state.error = "Failed to fetch product";
        })

    },
})


export default productSlice.reducer;