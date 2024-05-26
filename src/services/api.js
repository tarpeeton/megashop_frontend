import axios from "axios";

// =============== (AXIOS) SETTINGS =============
const instance = axios.create({
    baseURL: "http://localhost:5050",
});



// REGISTER
export const USER_REGISTER = (username, email, password) => {
    return instance.post(`/user/register`, { username, email, password });
};
// LOGIN
export const USER_LOGIN = (email, password) => {
    return instance.post(`/user/login`, { email, password });
};
// AUT_ME ??

export const AUT_ME = (token) => {
    return instance.get(`/user/authorization`, { headers: { Authorization: `Bearer ${token}` } });
};
// Cotegoriya bilan Mahsulatlarni olish
export const PRODUCT = (url, page) => {
    return instance.get(`/product/categories${url}&page=${page}`);
};
// Hamma Mahsulotlarni olish
export const GetProducts = (page) => {
    return instance.get(`/product/getAll?page=${page}`);
}
export const getProdcutWithID = (id) => {
    return instance.get(`/product/${id}`);
}
export const commentProduct = (userID , productID , rating , comment , phone  , name) => {
    return instance.post(`/user/comment/${userID}`, {productID , rating , comment , phone , name});
}
export const SearchProduct = (productname, page) => {
    return instance.get(`/product/search/product?productName=${productname}&page=${page}`);
};