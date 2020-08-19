
import { 
    SET_USERNAME, 
    SET_PASSWORD, 
    SET_EMAIL, 
    LOG_IN, 
    LOG_OUT, 
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL} from "./types";
import Axios from "axios";
import ActionButton from "antd/lib/modal/ActionButton";

//Sign Up Action creater
export const signUpRequest = (email, password) => {
    return (dispatch) => {
        dispatch(signUp());
        return Axios.post('http://13.125.235.4:3000', {email, password})
        .then((response) => {
            dispatch(signUpSucess())
        }).catch((error) => {
            dispatch(signUpFail(error.response.data.code))
        })
    }
}

export const signUp = (data) => {
    return {
        type: SIGN_UP,
        data,
    }
}

export const signUpSucess = () => {
    return {
        type: SIGN_UP_SUCCESS,
    }
}

export const signUpFail = () => {
    return {
        type: SIGN_UP_FAIL,
        error,
    }
}

//action creater 
export const loginAction = (data) => {
    return {
        type: LOG_IN,
        data,
    }
}

export const logoutAction = () => {
    return {
        type: LOG_OUT,
    }
}

export const setUsername = (data) => {
    return {
        type: SET_USERNAME,
        data,
    }
}

export const setEmail = (data) => {
    return {
        type: SET_EMAIL,
        data,
    }
}

export const setPassword = (data) => {
    return {
        type: SET_PASSWORD,
        data,
    }
}