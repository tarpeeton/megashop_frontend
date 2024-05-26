// authSlice.js

import { USER_SUCCESS, IS_FETCHING, USER_FAILURE } from "../actions/auth.js";
import {toast} from "react-toastify";
import {ToastrError, ToastrSuccess} from "../helpers/toastr.js";

const initialState = {
    isLoggedIn: false,
    isFetching: false,
    user: [], // Initial state da user ni null qilamiz
    token: null,
    error: null
};

const authSlice = (state = initialState, action) => {
    action.success ?  toast.success(action.message , ToastrSuccess) : toast.error(action.message , ToastrError);

    switch (action.type) {
        case USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
                isFetching: false,
                token: action.token,
                error: null
            };
        case USER_FAILURE:
            return {
                ...state,
                error: action.message
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
};

export default authSlice;
