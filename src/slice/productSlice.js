// authSlice.js

import { PRODUCT_SUCCESS , PRODUCT_FAILURE , SINGLE_PRODUCT , SINGLE_PRODUCTS_ERROR } from "../actions/product.js";

const initialState = {
    isFetching: false,
    product: [], // Initial state da user ni null qilamiz
    singleProduct: null,
    error: null,
    currentPage: 10,
    count: null,
};

const producSlice = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_SUCCESS:
                return {
                    ...state,
                    product: action.products, // Yangi mahsulotlar ro'yxatini oldingi ro'yxatga qo'shamiz
                    isFetching: false,
                    count: action.count
                };
        case SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.products
            }
        case SINGLE_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.message
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                error: action.message
            };

        default:
            return state;
    }
};


export default producSlice;
