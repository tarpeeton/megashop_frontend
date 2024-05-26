import {toast} from "react-toastify";
import {ToastrSuccess} from "./toastr.js";

export const saveProduct = (product) => {
    toast.success("Maxsulot savatga saqlandi" , ToastrSuccess);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    console.log("product saved successfully");
}