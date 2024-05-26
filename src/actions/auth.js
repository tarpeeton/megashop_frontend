// API
import {USER_LOGIN , USER_REGISTER , AUT_ME} from '../services/api.js';

// ACTION TYPE
export const USER_SUCCESS = "LOGIN";
export const USER_FAILURE = "LOGIN_FAILURE";
export const IS_FETCHING = "IS_FETCHING";


// ACTIONS
export const UserSuccess = (user , token , message , success) => ({ type: USER_SUCCESS, user , token  , message , success});
export const USerFailure = (message) => ({ type: USER_FAILURE, message});







// Thunk FUNCTIONS
export const Register = (username, email, password) => {
    return async (dispatch) => {
        const res = await USER_REGISTER(username, email, password);
        if(res.data.success === false) {
            dispatch(USerFailure(res.data.message))
        }else{
            localStorage.setItem('__token' , res.data.token );
            dispatch(UserSuccess(res.data.user , res.data.token , res.data.message , res.data.success));
        }
    };
};

export const Login = (email , password) => {
    return async (dispatch) => {
        const res = await USER_LOGIN(email, password);
        if(res.data.success === false) {
            dispatch(USerFailure(res.data.message))
        }else{
            localStorage.setItem('__token' , res.data.token );
            dispatch(UserSuccess(res.data.user , res.data.token , res.data.message , res.data.success));
        }
    };
};
export const AuthMe = (token) => {
    return async (dispatch) => {
        const res = await AUT_ME(token);
        if(res.data.success === false) {
            dispatch(USerFailure(res.data.message))
        }else{
            dispatch(UserSuccess(res.data.user , res.data.token));
        }
    };
};
