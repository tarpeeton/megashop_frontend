// deleteItem.js

import {toast} from "react-toastify";
import {ToastrError} from "./toastr.js";

const deleteItem = (cartItems, index) => {
    toast.error("Maxsulot O'chirildi" , ToastrError);
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    return newCartItems;
};

export default deleteItem;
