// API
import {
  PRODUCT,
  GetProducts,
  getProdcutWithID,
  commentProduct,
  SearchProduct,
} from "../services/api.js";

// ACTION TYPE
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";
export const SINGLE_PRODUCT = "SINGLE_PRODUCT";
export const SINGLE_PRODUCTS_ERROR = "SINGLE_PRODUCTS_ERROR";
// ACTIONS
export const productSuccess = (products, count) => ({
  type: PRODUCT_SUCCESS,
  products,
  count,
});
export const productFailure = (message) => ({ type: PRODUCT_FAILURE, message });
export const singleProduct = (products) => ({ type: SINGLE_PRODUCT, products });
export const singleProductError = (message) => ({
  type: SINGLE_PRODUCTS_ERROR,
  message,
});

// Thunk FUNCTIONS
export const ProductFilter = (url, page) => {
  return async (dispatch) => {
    const res = await PRODUCT(url, page);
    if (res.data.success === false) {
      dispatch(productFailure(res.data.message));
    } else {
      dispatch(productSuccess(res.data.products, res.data.count));
    }
  };
};

export const GetAllProducts = (page) => {
  return async (dispatch) => {
    const res = await GetProducts(page);
    if (res.data.success === false) {
      dispatch(productFailure(res.data.error));
    } else {
      dispatch(productSuccess(res.data.products, res.data.count));
    }
  };
};
export const GetProduct = (id) => {
  return async (dispatch) => {
    const res = await getProdcutWithID(id);
    console.log(res);
    if (res.data.success === false) {
      dispatch(singleProductError(res.data.error));
    } else {
      dispatch(singleProduct(res.data.product));
    }
  };
};
export const writeComment = (_id, productID, rating, comment, phone, name) => {
  console.log(_id, productID, rating, comment, phone, name, "writeCommentFunc");
  return async (dispatch) => {
    const res = await commentProduct(
      _id,
      productID,
      rating,
      comment,
      phone,
      name
    );
    if (res.data.success === false) {
      dispatch(singleProductError(res.data.error));
    } else {
      dispatch(singleProduct(res.data.products));
    }
  };
};

export const searchProduct = (productname, page) => {
  console.log(page);
  return async (dispatch) => {
    const res = await SearchProduct(productname, page);
    if (res.data.success === false) {
      dispatch(productFailure(res.data.error));
    } else {
      dispatch(productSuccess(res.data.products, res.data.count));
    }
  };
};
